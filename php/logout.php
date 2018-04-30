<?php
 
 $_SESSION = array();
 session_destroy();

   // avoid reusing the SID by redirecting 
   // back to the same page to regenerate session 
   Header("Location: HomeScreenView.php");
   
?>