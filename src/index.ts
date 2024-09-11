import { exec } from "child_process";
import { build } from "./script/build";
import { loading } from "./script/utils/loading";

const id = loading()
console.log("\x1b[44m", "Prettier", "\x1b[0m", "Formateando codigo...");
exec("npm run prettier", async (err) => {
    if (err) {
        console.log("\x1b[41m", "Error", "\x1b[0m", "building");
        console.log(err);
        clearTimeout(id);
    } else {
        await build();
        clearTimeout(id);
        process.stdout.write("");
        console.log('Sending build to server...')
    }
});
