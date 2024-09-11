export const loading = () => {
    const loadingChars = ["|", "*", "/", "*", "-", "*", "\\", ""];
    let index = 0;
    return setInterval(() => {
        // Movemos el cursor al principio de la línea con \r
        process.stdout.write(`\r${loadingChars[index]}`);
        index = (index + 1) % loadingChars.length; // Cicla a través de los caracteres
    }, 100);
}