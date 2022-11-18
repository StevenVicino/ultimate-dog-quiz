function compare(stringA, stringB){
    let letterCount = 0;
for(let i =0; i < stringA.length; i++){
    if(stringB.includes(stringA[i])){
        letterCount++;
    }
    else{
        letterCount--;
    }
}
const percentage = letterCount/stringB.length;
if(percentage > .8){
    return true
}
else{
    return false
}
}

module.exports = compare;