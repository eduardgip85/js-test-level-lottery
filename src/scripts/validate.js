export function validateUserNumber(input) {
    const n = Number(input);

    if (Number.isNaN(n)) {
        throw new Error("Ha de ser un numero");
    }

    if (!Number.isInteger(n)) {
        throw new Error("Ha de ser un integro");
    }

    if (n < 1 || n > 10) {
        throw new Error("Ha de ser entre 1 y 10");
    }

    return n;
}