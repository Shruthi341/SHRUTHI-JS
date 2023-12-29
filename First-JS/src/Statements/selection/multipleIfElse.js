var flag = "";
var user = {};

function onLoadUser() {
  fetch("user.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (u) {
      user = u;
    });
}

function onContinueClick() {
  var userId = document.getElementById("txtUserId").value;
  var userError = document.getElementById("userError");
  var userContainer = document.getElementById("userContainer");
  var pwdContainer = document.getElementById("pwdContainer");

  function toggleContainers() {
    userContainer.style.display = "none";
    pwdContainer.style.display = "block";
  }

  console.log(user);
  if (userId === user.Email) {
    flag = `Verfication code sent to your regeistered email ${user.Email}`;
    toggleContainers();
  } else if (userId === user.Mobile) {
    flag = `OTP sent to your regeistered mobile number ${user.Mobile}`;
    toggleContainers();
  } else {
    userError.innerHTML = `${userId} doesn't Exists`;
  }
}

function onLoginClick() {
  var pwd = document.getElementById("txtPwd").value;
  if(pwd ===user.Password){
    document.getElementById("pwdError").innerHTML = "";
   alert(`${flag}`);
  }
  else{
    document.getElementById("pwdError").innerHTML = "Invalid Password";
  }
}
