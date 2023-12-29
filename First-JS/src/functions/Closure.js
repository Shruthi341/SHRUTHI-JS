function Outer(){
    var x = 10;
    function Inner(){
        var y = 20;
        return y;
    }
    var innerResult = Inner();
    console.log(innerResult);
}

Outer();