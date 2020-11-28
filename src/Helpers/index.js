export const sortByName = characters => {
    return characters.sort(( a, b ) => a.name.localeCompare( b.name ));
}

export const removeByName = (characters, name) => {
    return characters.filter(character => character.name !== name);
}

export const getCharacterIdFromUrl = url => {
    return url.substring(url.lastIndexOf('/') + 1);
}

export const getCharacterByName = (characters, name) => {
    return characters.filter(item => item.name === name).pop();
}

export const getColorString = color => {
    let prepareString = color.replace(", ", "-"), currentColor = prepareString.split("-")[0];

    switch(currentColor) {
        case "auburn":
            currentColor = "#71231D";
            break;
        case "blond":    
            currentColor = "#DAA520";
            break;
        case "n/a":    
        case "none":
            currentColor = "#999";
            break;
    }

    return currentColor;
}