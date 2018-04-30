/*
 * Log In requirements. 
 * added by Donovan Henson
 */

 function myFunction() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");

    if (user.length < 5) {
        alert("Username must have at least 5 characters");
        return false;
    }

    if (pass.length > 5 || newpass.length < 15) {
        alert("Password must be between 5 and 15 characters long");
        return false;
    }
