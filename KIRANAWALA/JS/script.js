var cntrl = 0;
var userDetail = [];
var userInfo = document.getElementById('userInfo');

function check_empty(elementId, elementName) {
  var value = document.getElementById(elementId).value;
  if (value === "") {
    alert(elementName + " is required");
    return false;
  }
  return true;
}

// registration page submit button process
function validate() {
  const result =
    check_empty("username", "Username") &&
    check_empty("email", "Email") &&
    check_empty("number", "number") &&
    check_empty("pswd", "Password");
  if (result) {
    window.location.href = "sign_in.html";
    userDetail[0] = document.getElementById("username").value;
    userDetail[1] = document.getElementById("pswd").value;
    userInfo.innerHTML = "hello, "+ userDetail[0]
    cntrl = 1;
  }
  return false;
}

// sign in page submit button process
function signin() {
  alert(userDetail[0]);
}
