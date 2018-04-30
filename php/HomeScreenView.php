<?php include 'NavBar.php';?>

<!-- html added by John McCord -->

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="../css/MainStyle.css">
<link rel="stylesheet" href="../css/HomeScreenStyle.css">
<title>Dug's Coding | Home</title>
</head>
<body>
	<?php buildNavBar(); ?>
	<center>
		<div id="container">
			<table id="mainSelectTable" align="center">
				<tr>
					<td>
						<a href="../php/GamesScreenView.php"><img class="homeTiles" src="../images/HomeTile_Games.png"></a>
					</td>
					<td> 
						<a href="../php/VideosScreenView.php"><img class="homeTiles" src="../images/HomeTile_Videos.png"></a>
					</td>
					<td>
						<a href="../php/WhosWhoScreenView.php"><img class="homeTiles" src="../images/HomeTile_WhosWho.png"></a>
					</td>
				</tr>
				<tr>
					<td>
						<a href="../php/TutorialsScreenView.php"><img class="homeTiles" src="../images/HomeTile_Tutorials.png"></a>
					</td>
					<td >
						<a href="../php/TutorialsScreenView.php"><img class="homeTiles" src="../images/HomeTile_TheInnerWorkings.png"></a>
					</td>
					<td>
						<a href="../php/GamesScreenView.php"><img class="homeTiles" src="../images/HomeTile_CodeLoad.png"></a>
					</td>
				</tr>
			</table>
		</div>
	</center>
</body>
</html>