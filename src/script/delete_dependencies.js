
/**
 * 
 * @param {string} text 
 * @returns {string}
 */
export const deleteImports = (text) => {

    const regExpDependecies = new RegExp(
        /\/\/#region dependencies[\s\S]*?\/\/#endregion dependencies/
    );

    const regExp = text.match(regExpDependecies);
    if (regExp == null) return text;

    const oldtextDependencies = regExp[0];
    return text.replace(oldtextDependencies, '')
}