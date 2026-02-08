function wordBuilder(x) {
    let wordCollection = [];
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x.length; j++) {
            if(j !== i) {
                wordCollection.push(x[i] + x[j]);
            }
        }
    }
    return wordCollection;
}

console.log(wordBuilder(["a","b","c","d"]));