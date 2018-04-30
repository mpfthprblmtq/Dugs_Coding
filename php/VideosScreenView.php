<!--	Name: Pat Ripley			-->
<!--	File: VideosScreenView.html	-->

<?php 
include 'NavBar.php';
session_start();
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="../css/MainStyle.css">
<link rel="stylesheet" href="../css/GamesVideosTutorialsScreenStyle.css">
<title>Dug's Coding | Videos</title>
</head>
<?php buildNavBar(); ?>
<div class="optionsBody">
	<ul class="vidGameOptions">
		<li class="option" id="innerWorkings">
			<a href="pvAsqPbz9Ro?start=0&end=546" class="video"><img src="../images/Videos1.png"></a>
		</li>
		<li class="option" id="startingFromScratch">
			<a href="kcTwu6TFZ08" class="video"><img src="../images/Videos2.png"></a>
		</li>
		<li class="option" id="startingFromScratch">
			<a href="xfBWk4nw440" class="video"><img src="../images/Videos3.png"></a>
		</li>
		<li class="option" id="startingFromScratch">
			<a href="AkFi90lZmXA" class="video"><img src="../images/Videos4.png"></a>
		</li>
		
	</ul>
	<div class="video-wrapper">
		<iframe id="youtube" width="888" height="500" src="https://www.youtube.com/embed/pvAsqPbz9Ro?start=0&end=546" frameborder="0" allowfullscreen></iframe>
	</div>

</div>
</div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="../js/VideosScreen.js"></script>

</html>