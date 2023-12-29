function* generatesResult(){
    yield function(a,b){return a+b};
    yield (a,b)=> a-b;
    yield a => -a;
}

var result = generatesResult();
console.log(result.next().value(10,5));
console.log(result.next().value(10,5));
console.log(result.next().value(10,5));

