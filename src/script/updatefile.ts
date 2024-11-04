import { io } from 'socket.io-client'
import { getConfig } from "./utils/getConfig";
import { apiUrl, key, socketUrl } from '../../config.json'
import { loginWithoutEntry } from "./loginWithOutEntry";

export const upload = async (js: string) => {
    console.log('\x1b[46m', 'Uploading...', '\x1b[0m');
    const config = getConfig()

    // const socket = io(socketUrl, {
    //     autoConnect: true
    // })
    // console.log('socket ID', `${socket.id}`)
    console.log('send to ', `${apiUrl}/generate-code-dev`)
    const request = await fetch(`${apiUrl}/generate-code-dev`, {
        method: 'POST',
        body: JSON.stringify({
            js,
        }),
        headers: {
            authorization: `Bearer ${config.access_token}`,
            ['x-authentication-code']: `Bearer ${key}`,
            'Content-Type': 'application/json'
        }
    });
    if (request.headers.get('Content-Type')?.includes('application/json')) {
        const data = await request.json() as ({
            "warnings": any[],
            "code": string,
            "map": string
        } & { error?: { name: string }, msg?: string })

        if (data?.error) {
            console.log('\x1b[41m', data?.msg, '\x1b[0m');
            if (data?.error?.name === "AuthApiError") {
                loginWithoutEntry()
                upload(js)
            }
        }
        if (data?.warnings?.length > 0) {
            console.log('\x1b[42m', 'Build Successfull', '\x1b[0m');
        }
        if (data.code) {
            console.log('\x1b[43m', 'Build Successfull', '\x1b[0m');
        }
    }
}