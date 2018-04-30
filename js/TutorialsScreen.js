/*
 * added by John McCord
 */
 
$( document ).ready(function() {
    $(buildHelloWorldTutorialPageIntro()).appendTo($('.selectedOption'));
});

$(document).on("click", "#introButton", function(){
	$('.selectedOption').empty();
	$(buildHelloWorldTutorialPage1()).appendTo($('.selectedOption'));
});

var optionsAmt = 4;
var imageArr = ["../images/TutorialsSample1.png", "../images/TutorialsSample2.png", "../images/TutorialsSample3.png"];

$( ".option" ).each(function(index) {
    $(this).on("click", function(e){
    	var t = e.delegateTarget;
     	if(t.id == 0){
     		e.preventDefault();
     		$('.selectedOption').empty();
     		$(buildHelloWorldTutorialPageIntro()).appendTo($('.selectedOption'));
     	}else{
     		$('.selectedOption').empty();
			$(appendImage(t.id - 1)).appendTo($('.selectedOption'));
     	}
    });
});

/*************************************************************/

function appendImage(index){
	return '<img class="selectedOptionImage" src="' + imageArr[index] + '">';
}

function buildHelloWorldTutorialPageIntro(){
	var html =  '<center>' +
					'<div id="helloWorldIntro">' +
						'<input id="introButton" value="Click here to begin!"></button>'+
					'</div>' +
				'</center>' 
	return html;
}

function buildHelloWorldTutorialPage1(){
	var html =  '<div id="helloWorld">' +
					'<div id="headers">' +
						'<h1>Hello, World! Tutorial:</h1>' +
						'<h2 id="stepHeader">Introduction</h2>' +
					'</div>' +
					'<div id="instructions">' +
						'<p>This is a guided tutorial that will show you step by step how to create your first program.</p>' +
						'<p> - The " Input " area below is where you will be typing in your lines of code for the program.</p>' +
						'<p> - Executed code will be shown in the " Output " window.</p>' +
						'<p> - Once the correct line of code is executed, the "Next" button will take you to the next step in the tutorial.</p>' +
						'<p>Ready to begin? Click " Next " and get started!</p>' +
					'</div>' +
					'<table id="editorsTable">' +
						'<tbody>' +
							'<tr>' +
								'<td class="windows">' +
									'<label class="legend">Input:</label>' +
									'<div id="textEditor">' +
										'<span><label class="num">&nbsp&nbsp1&nbsp</label><input id="line1" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp2&nbsp</label><input id="line2" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp3&nbsp</label><input id="line3" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp4&nbsp</label><input id="line4" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp5&nbsp</label><input id="line5" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp6&nbsp</label><input id="line6" type="text"></span>' +
										'</div>' +
										'</br>' +
										'<input type="button" id="runButton1" class="runButton" value="Run">'+
								'</td>' +
								'<td class="windows">' +
									'<label class="legend">Output:</label>' +
									'<div id="console">' +
										'<label id="output"></label>' +
									'</div>' +
									'</br>' +
									'<button id="nextButton1" class="nextButton">Next ></button>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' 
				'</div>'
	return html;
}

 $(document).on("click", "#nextButton1", function(){
 	$('.selectedOption').empty();
 	$(buildHelloWorldTutorialPage2()).appendTo($('.selectedOption'));
 });

 $(document).on("click", "#runButton1", function(){
	var t = $('#line3').val();
	$('#output').text("** error - Check your syntax **");
 });

function buildHelloWorldTutorialPage2(){
	var html =  '<div id="helloWorld">' +
					'<div id="headers">' +
						'<h1>Hello, World! Tutorial:</h1>' +
						'<h2 id="stepHeader">Step 1</h2>' +
					'</div>' +
					'<div id="instructions">' +
						'<p>We will be using the programming language Java for this program.  Java is an object oriented language (OOP). Objects in Java are called " classes ".</p>' +
						'<p> Let'+"'"+'s go over the Hello World program, which simply prints " Hello, World! " to the Output screen.</p>' +
						'<p class="code"> public class Main {<br>' + 
						'&nbsp&nbsp&nbsp&nbsp&nbsppublic static void main(String[] args) {<br>' +
						'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSystem.out.println("Hello, World!");<br>' +
						'&nbsp&nbsp&nbsp&nbsp&nbsp}<br>' +
						'}</p>' +
						'<p>Let'+"'"+'s break this down line by line...Click "Next"</p>' +
					'</div>' +
					'<table id="editorsTable">' +
						'<tbody>' +
							'<tr>' +
								'<td class="windows">' +
									'<label class="legend">Input:</label>' +
									'<div id="textEditor">' +
										'<span><label class="num">&nbsp&nbsp1&nbsp</label><input id="line1" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp2&nbsp</label><input id="line2" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp3&nbsp</label><input id="line3" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp4&nbsp</label><input id="line4" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp5&nbsp</label><input id="line5" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp6&nbsp</label><input id="line6" type="text"></span>' +
										'</div>' +
										'</br>' +
										'<input type="button" id="runButton1" class="runButton" value="Run">' +
								'</td>' +
								'<td class="windows">' +
									'<label class="legend">Output:</label>' +
									'<div id="console">' +
										'<label id="output"></label>' +
									'</div>' +
									'</br>' +
									'<button id="nextButton2" class="nextButton">Next ></button>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' 
				'</div>'
				
	return html;
}

$(document).on("click", "#nextButton2", function(){
 	$('.selectedOption').empty();
 	$(buildHelloWorldTutorialPage3()).appendTo($('.selectedOption'));
 })

function buildHelloWorldTutorialPage3(){
	var html =  '<div id="helloWorld">' +
					'<div id="headers">' +
						'<h1>Hello, World! Tutorial:</h1>' +
						'<h2 id="stepHeader">Step 2</h2>' +
					'</div>' +
					'<div id="instructions">' +
						'<p>The first line defines a class called Main.</p>' +
						'<p class="code"> public class Main {</p>' +
						'<p>In Java, every line of code that can actually run needs to be inside a class. This line declares a class named Main, which is public. That means that any other class can access it. This is not important for now, so don'+ "'" + 't worry. For now, we'+"'"+'ll just write our code in a class called Main, and talk about objects later on.</p>' + 
						'<p class="code">Type " public class Main { " on line 1 of the Input and type a "}" on line 5.  The opening " { " and closing " } " represent a block of code.</p>' +
						'<p>After you are done and the line is typed correctly click "Next"</p>' +
					'</div>' +
					'<table id="editorsTable">' +
						'<tbody>' +
							'<tr>' +
								'<td class="windows">' +
									'<label class="legend">Input:</label>' +
									'<div id="textEditor">' +
										'<span><label class="num">&nbsp&nbsp1&nbsp</label><input id="line1" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp2&nbsp</label><input id="line2" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp3&nbsp</label><input id="line3" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp4&nbsp</label><input id="line4" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp5&nbsp</label><input id="line5" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp6&nbsp</label><input id="line6" type="text"></span>' +
										'</div>' +
										'</br>' +
										'<input type="button" id="runButton1" class="runButton" value="Run">'+
								'</td>' +
								'<td class="windows">' +
									'<label class="legend">Output:</label>' +
									'<div id="console">' +
										'<label id="output"></label>' +
									'</div>' +
									'</br>' +
									'<button id="nextButton3" class="nextButton">Next ></button>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' 
				'</div>'
	return html;
}

$(document).on("click", "#nextButton3", function(){
 	$('.selectedOption').empty();
 	$(buildHelloWorldTutorialPage4()).appendTo($('.selectedOption'));
 })

function buildHelloWorldTutorialPage4(){
	var html =  '<div id="helloWorld">' +
					'<div id="headers">' +
						'<h1>Hello, World! Tutorial:</h1>' +
						'<h2 id="stepHeader">Step 3</h2>' +
					'</div>' +
					'<div id="instructions">' +
						'<p>The second line is the entry point of our Java program. The main method has to have this exact signature in order to be able to run our program.</p>' +
						'<p class="code"> public static void main(String[] args) {</p>' +
						'<p class="code">Type " public static void main(String[] args) { " on line 2 of the Input and type a " } " on line 4.  Again, the opening " { " and closing " } " represent a block of code.</p>' +
						'<p>After you are done and the line is typed correctly click " Next "</p>' +
					'</div>' +
					'<table id="editorsTable">' +
						'<tbody>' +
							'<tr>' +
								'<td class="windows">' +
									'<label class="legend">Input:</label>' +
									'<div id="textEditor">' +
										'<span><label class="num">&nbsp&nbsp1&nbsp</label><input id="line1" type="text" value="public class Main {"></span>' +
										'<span><label class="num">&nbsp&nbsp2&nbsp</label><input id="line2" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp3&nbsp</label><input id="line3" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp4&nbsp</label><input id="line4" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp5&nbsp</label><input id="line5" type="text" value="}"></span>' +
										'<span><label class="num">&nbsp&nbsp6&nbsp</label><input id="line6" type="text"></span>' +
										'</div>' +
										'</br>' +
										'<input type="button" id="runButton1" class="runButton" value="Run">' +
								'</td>' +
								'<td class="windows">' +
									'<label class="legend">Output:</label>' +
									'<div id="console">' +
										'<label id="output"></label>' +
									'</div>' +
									'</br>' +
									'<button id="nextButton4" class="nextButton">Next ></button>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' 
				'</div>'
	return html;
}

$(document).on("click", "#nextButton4", function(){
 	$('.selectedOption').empty();
 	$(buildHelloWorldTutorialPage5()).appendTo($('.selectedOption'));
 });

$(document).on("click", "#runButton5", function(){
	var t = $('#line3').val();
	if($('#line3').val() == "System.out.println(" + '"' + "Hello, World!" + '"' + ");")
		$('#output').text("Hello, World!");
	else
	 	$('#output').text("** error - Check your syntax **");
 });

function buildHelloWorldTutorialPage5(){
	var html =  '<div id="helloWorld">' +
					'<div id="headers">' +
						'<h1>Hello, World! Tutorial:</h1>' +
						'<h2 id="stepHeader">Step 4</h2>' +
					'</div>' +
					'<div id="instructions">' +
						'<p>The third line is a pre-defined class method call that is used to print a line to the output of a program.</p>' +
						'<p class="code"> System.out.println("Hello, World!");</p>' +
						'<p class="code">Type " System.out.println("Hello, World!"); " on line 3 of the Input and click the " Run " button below.</p>' +
						'<p>After you are done and the output reads correctly, click " Next ".</p>' +
					'</div>' +
					'<table id="editorsTable">' +
						'<tbody>' +
							'<tr>' +
								'<td class="windows">' +
									'<label class="legend">Input:</label>' +
									'<div id="textEditor">' +
										'<span><label class="num">&nbsp&nbsp1&nbsp</label><input id="line1" type="text" value="public class Main {"></span>' +
										'<span><label class="num">&nbsp&nbsp2&nbsp</label><input id="line2" type="text" value="&nbsp&nbsp&nbsp&nbsp&nbsp public static void main(String[] args) {"></span>' +
										'<span><label class="num">&nbsp&nbsp3&nbsp</label><input id="line3" type="text"></span>' +
										'<span><label class="num">&nbsp&nbsp4&nbsp</label><input id="line4" type="text" value="&nbsp&nbsp&nbsp&nbsp&nbsp}""></span>' +
										'<span><label class="num">&nbsp&nbsp5&nbsp</label><input id="line5" type="text" value="}"></span>' +
										'<span><label class="num">&nbsp&nbsp6&nbsp</label><input id="line6" type="text"></span>' +
										'</div>' +
										'</br>' +
										'<input type="button" id="runButton5" class="runButton" value="Run">'+
								'</td>' +
								'<td class="windows">' +
									'<label class="legend">Output:</label>' +
									'<div id="console">' +
										'<label id="output"></label>' +
									'</div>' +
									'</br>' +
									'<button id="nextButton5" class="nextButton">Next ></button>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' 
				'</div>'
	return html;
}

$(document).on("click", "#nextButton5", function(){
 	$('.selectedOption').empty();
 	$(buildHelloWorldTutorialPage6()).appendTo($('.selectedOption'));
 });

function buildHelloWorldTutorialPage6(){
	var html =  '<div id="helloWorld">' +
					'<div id="headers">' +
						'<h1>Hello, World! Tutorial:</h1>' +
						'<h2 id="stepHeader">Step 5</h2>' +
					'</div>' +
					'<div id="instructions">' +
						'<p>And that'+"'"+'s it!  Congratulations!  You just completed your very first program!</p>' +
						'<p class="code">As an extra, try this out.  Replace the text " Hello, World! " in this line:</p>' +
						'<p class="code">&nbsp&nbsp System.out.println("Hello, World!"); </p>' +
						'<p class="code">With whatever text you like, and click " Run ".  Now, YOUR personal message is displayed.</p>' +
						'<p>That concludes this tutorial.  We hope you enjoyed it!  Try the next tutorial in our lineup!</p>' +
					'</div>' +
					'<table id="editorsTable">' +
						'<tbody>' +
							'<tr>' +
								'<td class="windows">' +
									'<label class="legend">Input:</label>' +
									'<div id="textEditor">' +
										'<span><label class="num">&nbsp&nbsp1&nbsp</label><input id="line1" type="text" value="public class Main {"></span>' +
										'<span><label class="num">&nbsp&nbsp2&nbsp</label><input id="line2" type="text" value="&nbsp&nbsp&nbsp&nbsp&nbsp public static void main(String[] args) {"></span>' +
										'<span><label class="num">&nbsp&nbsp3&nbsp</label><input id="line3" type="text" value="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp System.out.println(' + "''" + "Hello, World!" + "''"+ ');"></span>' +
										'<span><label class="num">&nbsp&nbsp4&nbsp</label><input id="line4" type="text" value="&nbsp&nbsp&nbsp&nbsp&nbsp}""></span>' +
										'<span><label class="num">&nbsp&nbsp5&nbsp</label><input id="line5" type="text" value="}"></span>' +
										'<span><label class="num">&nbsp&nbsp6&nbsp</label><input id="line6" type="text"></span>' +
										'</div>' +
										'</br>' +
										'<input type="button" id="runButton6" class="runButton" value="Run">'+
								'</td>' +
								'<td class="windows">' +
									'<label class="legend">Output:</label>' +
									'<div id="console">' +
										'<label id="output"></label>' +
									'</div>' +
									'</br>' +
									'<button id="nextButton6" class="nextButton">Next Tutorial></button>'+
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' 
				'</div>'
	return html;
}

$(document).on("click", "#runButton6", function(){
	var printLine = $('#line3').val();
	var arrOne = printLine.split("'");
	var arrTwo = arrOne[0].split(" ");
	if(arrTwo[1] == "System.out.println(" && arrOne[1] == "" && arrOne[3] == "" && arrOne[4] == ");")
		$('#output').text(arrOne[2]);
	else
	 	$('#output').text("** error - Check your syntax **");
 });

$(document).on("click", "#nextButton6", function(){
 	$('.selectedOption').empty();
	$(appendImage(0)).appendTo($('.selectedOption'));
 });