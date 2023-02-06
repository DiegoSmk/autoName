export function capitalizeFirstLetter(name: string) {
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    return capitalizedName
}

export function removeRepeatingChars(name: string) {
    let result = name;
    for (let i = 0; i < name.length - 1; i++) {
        if (name[i] === name[i + 1]) {
            result = result.substring(0, i) + result.substring(i + 1);
        }
    }
    return result;
}