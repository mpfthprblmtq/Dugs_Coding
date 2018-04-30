<!-- added by John McCord -->

<?php 
include 'NavBar.php';
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="../css/MainStyle.css">
	<link rel="stylesheet" href="../css/HelloWorldTutorial.css">
	<link rel="stylesheet" href="../css/GamesVideosTutorialsScreenStyle.css">
	<title>Dug's Coding | Tutorial</title>
</head>
<body>
	<?php buildNavBar(); ?>
	<div class="optionsBody">
		<ul class="vidGameOptions">
			<li class="option" id="0"><a><img src="../images/TutorialTile1.png"></a></li>
			<li class="option" id="1"><a><img src="../images/TutorialTile2.png"></a></li>
			<li class="option" id="2"><a><img src="../images/TutorialTile3.png"></a></li>
			<li class="option" id="3"><a><img src="../images/TutorialTile4.png"></a></li>
		</ul>
		<div class="selectedOption">

		</div>
	</div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="../js/TutorialsScreen.js"></script>

</html>