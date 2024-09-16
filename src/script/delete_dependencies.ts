
export const deleteImports = (text: string) => {
    var text_ = text
    const regExpDependecies = /^import\s.*?;$/gm

    const regExp = text.match(regExpDependecies);
    if (regExp == null) return text;

    regExp.forEach(e => {
        if (typeof e === 'string') {
            text_ = text_.replaceAll(e, '').replaceAll("export const", "const").replace('export default', '')
        }
    })
    return text_
}