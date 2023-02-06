import { roll } from "./random"
import { options, gender } from "./types"

export function chooseSyllable(options: options, name: string[][]) {
    let syllables = options[roll(0, options.length - 1)]

    let chosen = ""
    syllables.forEach((syllable) => {
        let letter = "";
        if (typeof syllable === "string") {
            letter = syllable.charAt(roll(0, syllable.length - 1));
        } else {
            letter = syllable[roll(0, syllable.length - 1)];
        }
        chosen += letter;
    });
    name.push([chosen]);
}

export function getNameEnding(gender: gender, name: string[][]) {
    const maleEndings = ["son", "o", "inho", "s", "aldo", "ardo", "ato", "vio"];
    const femaleEndings = ["a", "na", "ia", "ta", "sa", "h", "e", "ka", "za"];
    let chosen = ""

    if (gender === "male") {
        chosen = maleEndings[roll(0, maleEndings.length - 1)]
    } else {
        chosen = femaleEndings[roll(0, femaleEndings.length - 1)]
    }

    name.push([chosen]);
}