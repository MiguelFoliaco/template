//@ts-check
import { resolve } from 'path'
import { readdir, writeFile } from 'fs/promises'
import { readFileSync } from 'fs';
import esbuild from 'esbuild'
import { deleteImports } from './delete_dependencies';
import { cwd } from 'process';

export const build = async () => {
    try {
        const path = resolve(process.cwd(), 'src')
        const filesPath = await readdir(path, { encoding: 'utf-8', recursive: true });
        const files = filesPath.map(e => {
            if (e === 'index.ts') return []
            if (e.includes('.') && !resolve(cwd(), e).includes('\\script\\') && !e.includes('d.ts')) {
                const file = readFileSync(resolve(path, e), 'utf-8')
                return deleteImports(file)
            }
            return []
        }).flat();
        const allFiles = files.join('\n')
        const build = await esbuild.transform(allFiles, {
            jsx: 'transform',
            loader: 'tsx',
            color: true,
            minify: true,
        })
        if (build.code) {
            console.warn(build.warnings.join('\n'))
            await writeFile(resolve(process.cwd(), 'output.js'), build.code)
        }
        console.log('\x1b[42m', 'Build', '\x1b[0m', 'successfull');
    }
    catch (err) {
        console.log('\x1b[41m', 'Error', '\x1b[0m', 'building');
        console.log(err)
    }
}