export function preventDitongo(name: string[][]) {
    const hDtg = ["ai", "ae", "au", "ea", "eu", "ei", "ie", "ia", "io", "oa", "oi", "ua", "ui"]
    // Verifica se a última sílaba contém um ditongo / hiato
    const lastSyllable = name[name.length - 1][0].slice(-2);
    console.log(lastSyllable)
    if (hDtg.includes(lastSyllable)) {
        console.log("Previnir ditongo para a próxima sílaba")
        return true;
    } else {
        return false
    }
}