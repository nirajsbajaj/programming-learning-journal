function wordBuilder(x) {
    let wordCollection = [];

    let i = 0;
    while(i < x.length) {
        if(i === 0) {
            for(let j = i+1; j < x.length; j++) {
                let tempArr = [];
                tempArr.push(x[i], x[j]);
                wordCollection.push(tempArr.join(""));
            }
        } else if(i > 0 && i < x.length - 1) {
            for(let j = i; j>=0; j--) {
                let tempArr = [];
                tempArr.push(x[i],x[j])
                wordCollection.push(tempArr.join(""));
            }

            for(let j = i; j<x.length; j++) {
                let tempArr=[];
                tempArr.push(x[i],x[j]);
                wordCollection.push(tempArr.join(""));
            }
        } else {
            for(let j = i; j<x.length; j++) {
                let tempArr=[];
                tempArr.push(x[i],x[j]);
                wordCollection.push(tempArr.join(""));
            }
        }
        i++;
    }
    return wordCollection;
}

console.log(wordBuilder(["a","b","c","d"]));