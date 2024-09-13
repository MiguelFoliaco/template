import { resolve } from 'path';
import { readFile, writeFile, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import { decode, sign } from 'jsonwebtoken';
import { config } from 'dotenv';

config()
export const writePrevAccess = async (email: string, password: string) => {
    const pass = sign(password, process.env.KEY_PASS || '')
    await writeFile(resolve(__dirname, './env.temp'), `email=${email}\npass=${pass}`)
}

export const readPrevieAccess = async () => {
    if (!existsSync(resolve(__dirname, './env.temp'))) {
        return null
    }
    const read = await readFile(resolve(__dirname, './env.temp'), 'utf-8');
    const [email, password] = read.split('\n').map(e => e.replace('email=', '').replace('pass=', ''));
    return {
        email,
        password: decode(password)?.toString() || ''
    }

}

export const clearPrevAccess = async () => {
    await unlink(resolve(__dirname, './env.temp'))
}