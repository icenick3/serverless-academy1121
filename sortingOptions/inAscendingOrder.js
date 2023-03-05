// Display words in ascending order by number of letters in the word
const numberOfLetter = (array) => {
    const filteredArray = array.filter(element => typeof element === 'string')
    filteredArray.sort()
    filteredArray.sort(function (a,b){return a.length - b.length})
    console.log(filteredArray)}
export default  numberOfLetter;