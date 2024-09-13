import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import { Session } from '../types/auth.type';
export const getConfig = () => {
    const path = resolve(cwd(), 'crendentials.json')
    if (!existsSync(path)) {
        throw new Error('Por favor inicie sesión y vuelva a intentarlo')
    }

    const config = readFileSync(path, 'utf-8');
    return JSON.parse(config) as Session
}