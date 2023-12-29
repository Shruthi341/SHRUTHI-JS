function doSomething(callbackCall) {
    // Do something before calling the callback
    console.log("Doing something...");
    
    // Call the callback function
    callbackCall();
}
  
function callbackFunction() {
    console.log("Callback executed!");
}
  
// Passing callbackFunction as a callback
doSomething(callbackFunction);


  

  