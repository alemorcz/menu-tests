const { execSync } = require("child_process");
const fs = require("fs");

describe("Pruebas para hola_mundo.sh", () => {
    test("El archivo hola_mundo.sh debe existir", () => {
        expect(fs.existsSync("./hola.sh")).toBe(true);
    });

    test("El script debe imprimir 'Hola Mundo!'", () => {
        const output = execSync("./hola.sh").toString().trim();
        expect(output).toBe("Hola Mundo!");
    });
});
