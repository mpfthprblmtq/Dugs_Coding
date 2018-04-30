/*
 * Log In requirements. 
 * added by Donovan Henson
 */

 function myFunction() {

    var newuser = document.getElementById("newuser").value;
    var newpass = document.getElementById("newpass").value;
    var password2 = document.getElementById("password2").value;

    if (newuser.length < 5 || newuser.length > 15) {
        alert("Username must have at least 5 characters and less than 15 characters");
        window.location.href = 'SignUpScreenView.php';
        return false;
        
    }

    if (newpass.length < 5 || newpass.length > 15) {
        alert("Password must be between 5 and 15 characters long");
        window.location.href = 'SignUpScreenView.php';
        return false;
        
    }

    if (newpass != password2){
        alert("Passwords are not the same");
        window.location.href = 'SignUpScreenView.php';
        return false;
        
    }

}