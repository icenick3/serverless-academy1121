// sortingOptions words alphabetically
const alphabet = (array) => {
    const filteredArray = array.filter(element => typeof element === 'string')
    filteredArray.sort()
    console.log(filteredArray)
}

export default  alphabet;