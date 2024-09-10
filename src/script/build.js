//@ts-check
import { resolve } from 'path'
import { readdir, writeFile } from 'fs/promises'
import { readFileSync } from 'fs';
import esbuild from 'esbuild'

export const build = async () => {
    try {
        const path = resolve(process.cwd(), 'src')
        const filesPath = await readdir(path, { encoding: 'utf-8', recursive: true });
        const files = filesPath.map(e => {
            if (e === 'index.ts') return []
            if (e.includes('.') && !e.includes('.js')) {
                console.log(e)
                const file = readFileSync(resolve(path, e), 'utf-8')
                return file
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
        console.log('Build successfull')
    }
    catch (err) {
        console.log(err)
    }
}