function sortArrDefault(arr) {
    return arr.sort();
}

function ascendingOrder(arr) {
    return arr.sort( function(a,b) {
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    });
}

function descendingOrder(arr) {
    return arr.sort( function(a,b) {
        if(a > b) return -1;
        if(a < b) return 1;
        return 0;
    });
}
console.log(sortArrDefault([33, 4, 1111, 222]));
console.log(ascendingOrder([33, 4, 1111, 222]));
console.log(descendingOrder([33, 4, 1111, 222]));