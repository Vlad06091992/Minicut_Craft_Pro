export  function extractNumbersFromString(str:string) {
    const regex = /\d+/g;
    const numbersArray = str.match(regex);

    if (numbersArray) {
        return numbersArray.map(Number);
    } else {
        return [];
    }
}