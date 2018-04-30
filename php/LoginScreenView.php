<?php 
include 'NavBar.php';
session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../css/MainStyle.css">
    <link rel="stylesheet" href="../css/HomeScreenStyle.css">
    <link rel="stylesheet" href="../css/LoginScreenStyle.css">
    <title>Dug's Coding | Home</title>
</head>
<body>
    <?php buildNavBar(); ?>
   <div1>
       Login to Dug's Coding
   </div1>
    <div2>
        <form action="../php/LoginHandler.php" method="POST">
            Username:<br> <input type="text" class="resizedTextbox" id="user" name="user" value=""><br>
            Password: <br ><input type="password" class="resizedTextbox" id="pass" name="pass" value=""><br>
            
            <input type="checkbox" value="Remember" />Remember me 
            <br >
            
            <input type="submit" class="resizedButton" value="Let's go!">
            
        </form>

    </div2> 
    <div3>
        
        <a href="../php/SignUpScreenView.php">Forgot password?</a>
        <br >
       
        <form action="../php/HomeScreenView.php">

            <input type="submit" class="resizedButton" value="Cancel">

        </form>
    </div3> 
    <div4>
       <a href="../php/InstructorLoginScreenView.php">Switch to Instructor Login?</a>
    </div4>
</body>


</html>