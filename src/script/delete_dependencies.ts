
export const deleteImports = (text: string) => {

    const regExpDependecies = /^import\s.*?;$/gm

    const regExp = text.match(regExpDependecies);
    if (regExp == null) return text;

    const oldtextDependencies = regExp[0];
    return text.replaceAll(oldtextDependencies, '').replaceAll("export const", "const")
}