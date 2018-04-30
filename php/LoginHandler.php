<?php 

require_once '../db/connectDb.php';

$username = $_POST['user'];
$password = $_POST['pass'];

try{
 	/*create PDO object*/
 	$pdo = new PDO(PDO_CONNECT_STRING, DB_USER, DB_PWD);

 	/*query for user*/
	$sql_user = "SELECT * FROM users WHERE username = '$username' and password = '$password'";	
	
 	/*run the above query and set variables for fetch*/
 	$user = $pdo->query($sql_user);
	
 	/*specify the error handling level*/
 	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

 	//set variable to be used 
 	$u = $user->fetch(PDO::FETCH_ASSOC); //['username'], ['password']

	if ($u['username'] == $username && $u['password'] == $password ) {

		session_start();

	    //Store the name in the session
	    $_SESSION['username'] = $username;

		header("location:LoggedInUserScreenView.php");
	} else {
		header("location:IncorrectInstructorLoginScreenView.php");
		echo "Incorrect username or password, please go back and try again.";
	}

	/*free resources*/
	$pdo = null;

}catch(PDOException $e){
	//dump error message if needed
	die($e->getMessage());
}

?>
