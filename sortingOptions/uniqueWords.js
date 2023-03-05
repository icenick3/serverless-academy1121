const uniqueWords = (array) => {
    const filteredArray = array.filter(element => typeof element === 'string')
    const uniqueWordsInArray = filteredArray.reduce((acc, element)=> {
        if (acc.includes(element)){
            return acc;
        }
        return [...acc, element];
    },[]);
    console.log(uniqueWordsInArray)
};
export default uniqueWords;