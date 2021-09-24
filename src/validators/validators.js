export const required = value => {
    if (value) return undefined
    return "SOME ERROR"
}

export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Min length is ${minLength} symbols`
    return undefined
}