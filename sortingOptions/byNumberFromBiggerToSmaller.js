// Show numbers from bigger to smaller
const byNumberFromBiggerToSmaller = (array) => {
    const filteredArray = array.filter(element => typeof element === 'number')
    filteredArray.sort(function (a,b){return b-a})
    console.log(filteredArray)}
export default  byNumberFromBiggerToSmaller;