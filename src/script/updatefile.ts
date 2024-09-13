import { getConfig } from "./utils/getConfig";
import { apiUrl, key } from '../../config.json'

export const upload = async (js: string) => {
    console.log('\x1b[46m', 'Uploading...', '\x1b[0m');
    const config = getConfig()
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
    const data = await request.json() as( {
        "warnings": any[],
        "code": string,
        "map": string
    } & { error?: object, msg?: string })

    if (data?.error) {
        console.log('\x1b[41m', data?.msg, '\x1b[0m');
    }
    if (data?.warnings?.length > 0) {
        console.log('\x1b[42m', 'Build Successfull', '\x1b[0m');
    }
    if (data.code) {
        console.log('\x1b[43m', 'Build Successfull', '\x1b[0m');
    }
}