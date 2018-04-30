<!--	Name: Pat Ripley				-->
<!--	File: WhosWhoScreenView.html	-->

<?php 
include 'NavBar.php';
session_start();
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="../css/MainStyle.css">
		<link rel="stylesheet" href="../css/WhosWhoScreenStyle.css">
		<title>Dug's Coding | Who's Who</title>
	</head>
	<body>
		<?php buildNavBar(); ?>
			<!-- Main table of pictures -->
			<center>
				<table id="mainTable" align="center">
				<caption>Click on a Famous Computer Scientist!</caption>
					<tr>
					<!-- Start first row -->
					<!-- Billy Gates -->
					<td><div class="flip-container" onclick="this.classList.toggle('hover');">
						<div class="flipper">
							<div class="front">
								<img class="who" src="../images/computerscientists/billgates.png">
							</div>
							<div class="back">
								<img class="who" src="../images/computerscientists/billgates_back.png">
							</div>
							</div>
						</div>
					</td>

					<!-- Alan Turing -->
							<td><div class="flip-container" onclick="this.classList.toggle('hover');">
						<div class="flipper">
							<div class="front">
								<img class="who" src="../images/computerscientists/alanturing.png">
							</div>
							<div class="back">
								<img class="who" src="../images/computerscientists/alanturing_back.png">
							</div>
						</div>
						</div>
					</td>

					<!-- Edsger Dijkstra -->
					<td><div class="flip-container" onclick="this.classList.toggle('hover');">
						<div class="flipper">
							<div class="front">
								<img class="who" src="../images/computerscientists/edsgerdijkstra.png">
							</div>
							<div class="back">
								<img class="who" src="../images/computerscientists/edsgerdijkstra_back.png">
							</div>
						</div>
						</div>
					</td>

					<!-- Tim Berners-Lee -->
					<td><div class="flip-container" onclick="this.classList.toggle('hover');">
						<div class="flipper">
							<div class="front">
								<img class="who" src="../images/computerscientists/timbernerslee.png">
							</div>
							<div class="back">
								<img class="who" src="../images/computerscientists/timbernerslee_back.png">
							</div>
						</div>
						</div>
					</td>
							
				</tr>
				<!-- End first row, begin next row -->
				<tr>
					<!-- Grace Hopper -->
					<td><div class="flip-container" onclick="this.classList.toggle('hover');">
						<div class="flipper">
							<div class="front">
								<img class="who" src="../images/computerscientists/gracehopper.png">
							</div>
							<div class="back">
								<img class="who" src="../images/computerscientists/gracehopper_back.png">
							</div>
						</div>
						</div>
					</td>

					<!-- Steve Jobs -->
					<td><div class="flip-container" onclick="this.classList.toggle('hover');">
						<div class="flipper">
							<div class="front">
								<img class="who" src="../images/computerscientists/stevejobs.png">
							</div>
							<div class="back">
								<img class="who" src="../images/computerscientists/stevejobs_back.png">
							</div>
						</div>
						</div>
					</td>
							
					<!-- Mark Zuckerberg -->
					<td><div class="flip-container" onclick="this.classList.toggle('hover');">
						<div class="flipper">
							<div class="front">
								<img class="who" src="../images/computerscientists/markzuckerberg.png">
							</div>
							<div class="back">
								<img class="who" src="../images/computerscientists/markzuckerberg_back.png">
							</div>
						</div>
						</div>
					</td>

					<!-- John McCarthy -->
					<td><div class="flip-container" onclick="this.classList.toggle('hover');">
						<div class="flipper">
							<div class="front">
								<img class="who" src="../images/computerscientists/johnmccarthy.png">
							</div>
							<div class="back">
								<img class="who" src="../images/computerscientists/johnmccarthy_back.png">
							</div>
						</div>
						</div>
					</td>
							
				</tr>
			</table>
		</center>
		<!-- End main table of pictures -->
	</body>
</html>