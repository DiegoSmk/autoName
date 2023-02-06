import { gender } from "./src/types"
import { roll } from "./src/random"
import arrOptions from "./src/db"
import { getNameEnding, chooseSyllable } from "./src/syllable"
import { preventDitongo } from "./src/preventDitongo"
import { capitalizeFirstLetter, removeRepeatingChars } from "./src/other"

function generateName(number?: number, gender?: gender) {
    let numberSyllables = number || roll(2, 4)

    let name: string[][] = []
    
    for (let i = 0; i < numberSyllables; i++) {
        if (name.length == numberSyllables - 1) {
            if (gender != undefined) {
                getNameEnding(gender, name)
                break
            } else {
                chooseSyllable(arrOptions.end, name)
                break
            }
        } else if (name.length > 0) {
            switch (preventDitongo(name)) {
                case true:
                    chooseSyllable(arrOptions.preventDitongo, name)
                    break;

                default:
                    chooseSyllable(arrOptions.middle, name)
                    break;
            }
        } else {
            chooseSyllable(arrOptions.zero, name)
        }
    }

    let nameString = ""

    name.forEach((syllables) => {
        nameString += syllables;
    });

    let resultWithoutRepetition = removeRepeatingChars(nameString)
    let capitalizedName = capitalizeFirstLetter(resultWithoutRepetition)
    let result = capitalizedName.replace("@", "ão").replace("!", "ães").replace("#", "ões")
    return result
}