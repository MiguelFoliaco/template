export const getName = (code: string) => {
    const regex = /^\/\/#ComponentName\s.*\[(.*?)\]/g;
    const line = code
    const _match = line.match(regex);

    if (_match) {
        return _match[0].replace('//#ComponentName', '').replace('[', '').replace(']', '').trim()
    }

    const regexFn = /const\s+([a-zA-Z_$][\w$]*)\s*=\s*(function|\([^\)]*\)\s*=>)/;
    const match = code.match(regexFn);
    if (match) {
        return match[1]; // Output: myFunction
    }
    return 'No name'

}