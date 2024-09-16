import { writeFile } from 'fs/promises';
import { cwd } from 'process';
import { resolve } from 'path';
import { keyInYN } from "readline-sync";
import { clearPrevAccess, readPrevieAccess } from "./read_prev_access";
import { AuthResponse } from "./types/auth.type";
import { loading } from "./utils/loading";
import { apiUrl } from '../../config.json'
export const loginWithoutEntry = async () => {
    console.log('\x1b[40m', 'Re-Login CLI 💚', '\x1b[0m');
    const prevAuth = await readPrevieAccess()
    // var checkPrev: string | boolean = false;
    // if (prevAuth) {
    //     checkPrev = keyInYN(`Desea utilizar las keys previas de ${prevAuth.email}?`)
    //     if (!checkPrev) {
    //         clearPrevAccess()
    //     }
    // }
    const email = prevAuth?.email!
    const password = prevAuth?.password!
    const request = await fetch(`${apiUrl}/login`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        //@ts-ignore
        body: JSON.stringify({ email, password })
    })
    const id = loading()
    const response = await request.json() as AuthResponse
    if (response.error) {
        clearInterval(id)
        console.log('\n')
        console.log('\x1b[41m', 'Error', '\x1b[0m', 'Error al iniciar session');
        console.log('\x1b[41m', 'code', '\x1b[0m', response.error?.code);
        console.log('\n')
        clearPrevAccess()
        return
    }
    if (response.data.session) {
        await writeFile(resolve(cwd(), 'crendentials.json'), JSON.stringify(response.data.session))
    }
    clearInterval(id)

    // console.log(response)
}