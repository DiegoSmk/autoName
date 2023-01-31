type gender = "male" | "female"

function roll(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseSyllable(options: string[][], name: string[][]) {
  let syllables = options[roll(0, options.length - 1)]
  let chosen = ""
  syllables.forEach((syllable) => {
    let letter = syllable.charAt(roll(0, syllable.length - 1));
    chosen += letter;
  });
  name.push([chosen]);
}

function getNameEnding(gender: gender, name: string[][]) {
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

function capitalizeFirstLetter(name: string) {
  let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
  return capitalizedName
}

function removeRepeatingChars(name: string) {
  let result = name;
  for (let i = 0; i < name.length - 1; i++) {
    if (name[i] === name[i + 1]) {
      result = result.substring(0, i) + result.substring(i + 1);
    }
  }
  return result;
}



function generateName(number?: number, gender?: gender) {

  let v = "aeiouy"
  let c = "bcdfghjklmnpqrstwvxyz"
  let vv = "@!#&"            // @=ão, !=ães, #=son & = im
  let s = "hlr"
  let ss = "hlsxmnrz"
  let numberSyllables = number || roll(2, 4)
  console.log(numberSyllables)
  let name: string[][] = []
  let arrOptions = {
    zero: [[v], [c, v], [v, ss], [c, v, ss], [c, s, v]],
    uno: [[c, v], [v, c], [v, ss], [c, v, ss]],
    dois: [[c, v], [v, ss], [c, v, ss]],
    end: [[c, v], [v, c], [v, ss], [c, s, vv], [c, v, ss], [c, vv], [vv]]
  }

  for (let i = 0; i < numberSyllables; i++) {
    console.log(name.length)
    if (name.length == numberSyllables - 1) {
      if (gender != undefined) {
        getNameEnding(gender, name)
        break
      } else {
        chooseSyllable(arrOptions.end, name)
        break
      }
    } if (name.length > 2) {
      chooseSyllable(arrOptions.dois, name)
    } else if (name.length == 1) {
      chooseSyllable(arrOptions.uno, name)
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
  console.log(gender)
  let result = capitalizedName.replace("@", "ão").replace("!", "ães").replace("#", "son").replace("&", "im")
  return result
}

const test = generateName(2, "female")

console.log(test)
