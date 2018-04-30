<?php

require_once '../db/connectDb.php';

if($_POST['submit']){

	$newUsername = $_POST['newuser'];
	$newPassword = $_POST['newpass'];
	$newEmail = $_POST['email'];
	$newGrade = $_POST['grade'];

	try{
	 	/*create PDO object*/
	 	$pdo = new PDO(PDO_CONNECT_STRING, DB_USER, DB_PWD);

	 	/*query for inset user*/
		$sql_userInsert = "INSERT INTO users (username, password, grade, email) 
    	VALUES('$newUsername', '$newPassword', '$newGrade', '$newEmail')";

		$pdo->exec($sql_userInsert);

	    session_start();

	    //Store the name in the session
	    $_SESSION['username'] = $newUsername;

	    header("location:LoggedInUserScreenView.php");

		/*free resources*/
		$pdo = null;

	}catch(PDOException $e){
		//dump error message if needed
		die($e->getMessage());
	}
}

?>