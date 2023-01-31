# Generate Name

This function is responsible for generating a random name, receiving as parameters the number of syllables and the gender of the name. The function generates a name composed of syllables of consonants and vowels, followed by some endings that vary according to gender. Sometimes these endings can contain special characters.

## Parameters

This function takes two optional parameters: 

- **number**: a number between 2 and 4, representing the number of syllables of the generated name.
- **gender**: a string, which can be either `male` or `female`.

### Examples

```javascript
// generate a random name with a random number of syllables
generateName() // returns something like "Xorvia"

// generate a random name with 3 syllables
generateName(3) // returns something like "Kilhous"

// generate a random female name with a random number of syllables
generateName(undefined, "female") // returns something like "Karae"

// generate a random male name with 4 syllables
generateName(4, "male") // returns something like "Kilhouson"
```

## Roll

The `roll` function is responsible for returning a random number between two given parameters.

```js
function roll(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

## Choose Syllable

The `chooseSyllable` function is responsible for selecting random syllables from a given array and adding them to the name array.

```js
function chooseSyllable(options: string[][], name: string[][]) {
  let syllables = options[roll(0, options.length - 1)]
  let chosen = ""
  syllables.forEach((syllable) => {
    let letter = syllable.charAt(roll(0, syllable.length - 1));
    chosen += letter;
  });
  name.push([chosen]);
}
```

## Get Name Ending

The `getNameEnding` function is responsible for adding the appropriate ending to a given name, depending on the gender of the name.

```js
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
```

## Capitalize First Letter

The `capitalizeFirstLetter` function is responsible for capitalizing the first letter of a given string.

```js
function capitalizeFirstLetter(name: string) {
  let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
  return capitalizedName
}
```

## Remove Repeating Chars

The `removeRepeatingChars` function is responsible for removing repeating characters in a given string.

```js
function removeRepeatingChars(name: string) {
  let result = name;
  for (let i = 0; i < name.length - 1; i++) {
    if (name[i] === name[i + 1]) {
      result = result.substring(0, i) + result.substring(i + 1);
    }
  }
  return result;
}
```

## Generate Name

The `generateName` function is responsible for generating a name, using all of the functions above.

```js
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
```
