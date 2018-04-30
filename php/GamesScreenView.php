<!--	added by John McCord		-->

<?php 
include 'NavBar.php';
session_start();
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="../css/MainStyle.css">
<link rel="stylesheet" href="../css/CodeLoadGame.css">
<link rel="stylesheet" href="../css/GamesVideosTutorialsScreenStyle.css">
<title>Dug's Coding | Games</title>
</head>
<body>
	<?php buildNavBar(); ?>
	<div class="optionsBody">
		<ul class="vidGameOptions">
			<li class="option" id="0"><a><img src="../images/GameTile1.png"></a></li>
			<li class="option" id="1"><a><img src="../images/GameTile2.png"></a></li>
			<li class="option" id="2"><a><img src="../images/GameTile3.png"></a></li>
			<li class="option" id="3"><a><img src="../images/GameTile4.png"></a></li>
		</ul>
		<div class="selectedOption">
			
		</div>
	</div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="../js/GamesScreen.js"></script>

</html>