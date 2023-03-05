// Show numbers from lesser to greater
const byNumberFromSmallerToBigger = (array) => {
    const filteredArray = array.filter(element => typeof element === 'number')
    filteredArray.sort(function (a,b){return a-b})
    console.log(filteredArray)}
export default  byNumberFromSmallerToBigger;