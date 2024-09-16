import { readFileSync } from 'fs';
import { readdir } from 'fs/promises';
import { resolve } from 'path'
import { cwd } from 'process';
import { deleteImports } from './delete_dependencies';
import { getTypeComponentByText } from './utils/getTypeComponentByText';
import { getName } from './utils/getName';
import { Component } from './types/payloadComponent';
import { getConfig } from './utils/getConfig';
import { projectId, key, apiUrl, os_id } from '../../config.json'
import { keyInYNStrict, question, } from 'readline-sync';

const publicComponent = async () => {
    const config = getConfig()
    const path = resolve(cwd(), 'src')
    const filesPath = await readdir(path, { encoding: 'utf-8', recursive: true });
    const files = filesPath.map(e => {
        if (e === 'index.ts') return null
        if (e.includes('.') && !resolve(cwd(), e).includes('\\script\\') && !e.includes('d.ts')) {
            const file = readFileSync(resolve(path, e), 'utf-8')
            return [deleteImports(file), e]
        }
        return null
    }).filter(e => e !== null);

    const componentsSend: Component[] = files.map(e => {
        const [text, path] = e
        const type = getTypeComponentByText(text)
        const name = getName(text)
        if (name !== 'No name') {
            return {
                type,
                name,
                codeJSX: text,
                code: path,
                owner: config.user.email,
                projectid: projectId,
                props: '{}',
            }
        }
        return null
    }).filter(e => e !== null);

    const request = await fetch(`${apiUrl}/create-component`, {
        method: 'post',
        body: JSON.stringify({ components: componentsSend, projectId }),
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${config.access_token}`,
            ['x-authentication-code']: `Bearer ${key}`,
        }
    })
    const response = await request.json()
    console.error('ERROR', response)
    //@ts-ignore
    if (response?.data?.error) {
        return console.error('Ocurrio un error al guardar los componentes', response)
    }

    const check = keyInYNStrict("Desea generar una version?")
    if (check) {
        const requestGenerate = await fetch(`${apiUrl}/generate-code`, {
            method: 'post',
            body: JSON.stringify({
                available_production: true,
                available_test: true,
                os_id: os_id,
                projectid: projectId,
                publicateBy: config.user.id,
            }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${config.access_token}`,
                ['x-authentication-code']: `Bearer ${key}`,
            }
        })
        console.log(await requestGenerate.json())
    }
}

publicComponent()