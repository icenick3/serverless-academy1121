const uniqueWordsAndNumbers = (array) => {
    const uniqueWordsInArray = array.reduce((acc, element)=> {
        if (acc.includes(element)){
            return acc;
        }
        return [...acc, element];
    },[]);
    console.log(uniqueWordsInArray)
};
export default uniqueWordsAndNumbers;