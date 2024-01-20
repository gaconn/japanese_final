export const shuffleObjectKeys = (objOrigin) => {
    if (!isObject(objOrigin)) {
        throw new Error("The Parameter must be Object type, got " + typeof objOrigin)
    } 
    const arrKey = Object.keys(objOrigin)

    for (let index = arrKey.length -1; index > 0; index--) {
        var randomPosition = Math.floor(Math.random() * (index +1))
        const tmp = arrKey[randomPosition]
        arrKey[randomPosition] = arrKey[index]
        arrKey[index] = tmp 
    }

    const objShuffled = {}
    for (let index = 0; index < arrKey.length; index++) {
        objShuffled[arrKey[index]] = objOrigin[arrKey[index]]
    }
    return objShuffled
}

export const isObject = (obj) => {
    return typeof obj === "object"
}