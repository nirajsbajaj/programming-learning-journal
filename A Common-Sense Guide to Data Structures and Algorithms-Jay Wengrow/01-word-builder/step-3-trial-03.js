function wordBuilder(x) {
    let wordCollection = [];

    let i = 0;
    while(i < x.length) {

        for(let j = i-1, k = i+1; j >= 0, k < x.length; j--, k++) {
            
            let tempArr = [];
            tempArr.push(x[i], x[j]);
            tempArr.push(x[i], x[k]);

            wordCollection.push(tempArr.join(""));
        }

        i++;
    }
    return wordCollection;
}

console.log(wordBuilder(["a","b","c","d"]));