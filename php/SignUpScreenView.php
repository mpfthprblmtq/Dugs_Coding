<?php include 'NavBar.php';?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="../css/MainStyle.css">
<link rel="stylesheet" href="../css/SignUpScreenStyle.css">
<script src="../js/SignUpScreen.js"></script>
<title>Dug's Coding | Sign Up!</title>
</head>
<body>
	<?php buildNavBar(); ?>
	<table align="center">
		<tbody>
			<tr>
				<td>
					<div>
						<form name="Signup" action="../php/SignUpHandler.php" onsubmit="return myFunction();" method = "post">
						<br>
							<label>Create Username:</label>
							</br>
							<input type="text" id="newuser" name="newuser" required>
							<br>
							<label>E-mail:</label>
							</br>
							<input type="email" id="email" name="email" required>
							<br>
							<label>Grade Level:</label>
							<br>
							<select name="grade">
								<option value="4">Fourth</option>
								<option value="5">Fifth</option>
								<option value="6">Sixth</option>
								<option value="7">Seventh</option>
								<option value="8">Eighth</option>
							</select>
							<br>
							<label>Password:</label>
							<br>
							<input type="password" id="newpass" name="newpass" required>
							<br>
							<label>Re-type Password:</label>
							<br>
							<input type="password" id="password2" required>
							<br>
							</br>
							<center><input type="submit" class="resizedButton" name ="submit" value="Sign Up"></center>
						</form>
						<br>
					</div>
				</td>
				<td style="border-left: 5px solid white;">
					<div>
						<center><label>About</label></center>
						
						<p>Dug's Coding is an application in which is designed to engage middle-school aged students in the study of computer science.  We are attempting to foster greater interest in computer science by making our site fun and interactive.  We aim to teach kids interested in computer science about famous computer scientists, vocabulary, and concepts.  Our application includes coding tutorials, informational pages, and even games.  </p>
						<br>
						<br>

						<p style="border-top: 2px solid black;">
						Create an account to recieve rewards and badges for completing tasks and games.
						</p>
						
						<p style="border-bottom: 2px solid black;">
						Sign up with Facebook, Google+, or Twitter to post goals that are reached withing your account.
						</p>
						<label><u>Sign up with:</u></label>
						<p>
							<img src="../images/Facebook-Thumbnail.jpg" width="50" height="50" />
				        	<img src="../images/Google+-Thumbnail.png" width="50" height="50"/>
				        	<img src="../images/Twitter-Thumbnail.jpg" width="50" height="50"/>
						</p>
						<br>
						<br>
						
						<p>
						<!-- empty -->
						</p>
						
						</p>
						<br>
						<br>
						<br>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</body>

</html>
