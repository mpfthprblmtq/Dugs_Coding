<!-- added by John McCord -->

<?php

function buildNavBar(){
	if ( !isset($_SESSION['username']) ) {
               $res= 'Not logged in, <a href="SignUpScreenView.php">Sign up today!</a>';
            } else {
               $res= 'Logged in as ' . $_SESSION['username'] . ' - <a href="logout.php" >Logout</a>'; 
            }

	$bar= 	'<div class="textImage">
				<img src="../images/DugsCodingText.png" width="400">
			</div>
			<div class="mainImage">
				<img src="../images/DugTheDog.png" height="200" width="225">
			</div>
			<div class="signUpLink">'
			
            .$res.
         
			'</div>
			<ul class="navbar">
				<li><a class="homeLink" href="../php/HomeScreenView.php">Home</a></li>
				<li><a href="../php/GamesScreenView.php">Games</a></li>
				<li><a href="../php/VideosScreenView.php">Videos</a></li>
				<li><a href="../php/TutorialsScreenView.php">Tutorials</a></li>
				<li><a href="../php/WhosWhoScreenView.php">Who\'s Who</a></li>
				<li style="float:right;"><a href="../php/InstructorLoginScreenView.php">Login</a></li>
			</ul>';
	echo $bar;
}
$_SESSION = array();
?>