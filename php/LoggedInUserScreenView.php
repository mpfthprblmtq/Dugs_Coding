<?php

include 'NavBar.php';
session_start();
?>

<!DOCTYPE html>


<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../css/MainStyle.css">
    <link rel="stylesheet" href="../css/LoggedInUserScreenStyle.css">
    <title>Dug's Coding | Welcome!</title>

    
</head>
<body>
   <?php buildNavBar(); ?> 

   <div class="greeting">
    <?php
	   
     echo 'Welcome, '.$_SESSION['username']."!";
	   ?>
   </div>

<br>
    
    <div class="daily" align="center">
      Today's daily challenge:
      <a href="../php/GamesScreenView.php">
        <img class="sample" src="../images/GameTile1.png">
      </a>
    </div>


<div class="badges" align="right">
  Your badges:
  <img src="../images/badges.png">
</div>

</body>
</html>