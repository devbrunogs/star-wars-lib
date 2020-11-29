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
        case "yellow":
            currentColor = "#DAA520";
            break;
        case "n/a":
        case "none":
            currentColor = "#999";
            break;
    }

    return currentColor;
}

export const mockCharacters = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        birth_year: "19BBY",
        eye_color: "blue",
        gender: "male",
    },
    {
        name: "C-3PO",
        birth_year: "112BBY",
        eye_color: "yellow",
        gender: "n/a",
        hair_color: "n/a",
        height: "167",
        mass: "75",
        name: "C-3PO",
        skin_color: "gold"
    }
]

export const mockOptions = [
    {
        value: "Option1",
        text: "1"
    },
    {
        value: "Option2",
        text: "2"
    },
    {
        value: "Option3",
        text: "3"
    }
]