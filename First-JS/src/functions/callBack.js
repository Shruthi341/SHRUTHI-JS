function VerifyPassword(password, success, failure){
    if(password == "admin"){
        success();
    }
    else{
        failure()
    }
}

VerifyPassword("admin",function(){console.log("Login Sucess")}, function(){console.log("Login Failed")})