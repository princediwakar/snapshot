
export const toTitleCase = (str) => {
    str = str.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return str.join(' ')
}
