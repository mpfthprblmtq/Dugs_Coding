/*
 * added by John McCord
 */
 
var incrementCorrect = 0;
var optionsAmt = 4;
var imageArr = ["../images/MathMinute60.png", "../images/Hard_Wired.png", "../images/LoopLogic.png"];

$( ".option" ).each(function(index) {
    $(this).on("click", function(e){
    	var t = e.delegateTarget;
     	if(t.id == 0){
     		e.preventDefault();
     		$('.selectedOption').empty();
     		$(buildCodeLoadGamePageIntro()).appendTo($('.selectedOption'));
     	}else{
     		$('.selectedOption').empty();
			$(appendImage(t.id - 1)).appendTo($('.selectedOption'));
     	}
    });
});

$( document ).ready(function() {
    $(buildCodeLoadGamePageIntro()).appendTo($('.selectedOption'));
});

$(document).on("click", "#introButton", function(){
	$('.selectedOption').empty();
	$(buildCodeLoadPlatform()).appendTo($('.selectedOption'));

	addDragDropHandlers();
});

$(document).on("click", "#playAgainButton", function(){
	$('.selectedOption').empty();
	$(buildCodeLoadPlatform()).appendTo($('.selectedOption'));

	incrementCorrect = 0;

	addDragDropHandlers();
});

function addDragDropHandlers(){
	function handleDragEnd(e) {
	  	this.style.opacity = '1';
	  	[].forEach.call(tiles, function (tile) {
	    	tile.classList.remove('over');
	  	});
	}

	var tiles = document.querySelectorAll('.tile');
	[].forEach.call(tiles, function(tile) {
	  	tile.addEventListener('dragstart', handleDragStart, false);
	 	tile.addEventListener('dragenter', handleDragEnter, false);
	  	tile.addEventListener('dragover', handleDragOver, false);
	  	tile.addEventListener('dragleave', handleDragLeave, false);
	  	tile.addEventListener('drop', handleDrop, false);
	  	tile.addEventListener('dragend', handleDragEnd, false);
	});
}

function appendImage(index){
	return '<img class="selectedOptionImage" src="' + imageArr[index] + '">';
}

function buildCodeLoadGamePageIntro(){
	var html =  '<center>' +
					'<div id="codeLoadIntro">' +
						'<input id="introButton" value="Click here to play!"></button>'+
					'</div>' +
				'</center>' 
	return html;
}

function buildCodeLoadPlatform(){
	var html = 	'<div id="codeLoad">' +
					'<center>' +
						'<div id="messageContainer" style="visibility: ; position: absolute; left: 50%;">' +
						'</div>' +
					'</center>' +
					'<div id="headers">' +
						'<h1>Code Load</h1>' +
					'</div>' +
					'<div id="mainContainer" class="container">' +
						'<div class="instructions">' +
							'<p>Drag and drop the right line of code to its correct output or vice versa.</p>' +
							'<p>Correct combinations will be highlighted in green.</p>' +
						'</div>' +
						'<div class="tableContainer">' +
							'<table class="dragDropTable">' +
								'<tbody>' +
									'<tr>' +
										'<td><img id="10" name="7" draggable="true" class="tile" src="../images/tile12b.png"></td>' +
										'<td><img id="8" name="11" draggable="true" class="tile" src="../images/tile7a.png"></td>' +
										'<td><img id="3" name="6" draggable="true" class="tile" src="../images/tile9a.png"></td>' +
									'</tr>' +
									'<tr>' +
										'<td><img id="12" name="9" draggable="true" class="tile" src="../images/tile6b.png"></td>' +
										'<td><img id="5" name="2" draggable="true" class="tile" src="../images/tile10b.png"></td>' +
										'<td><img id="6" name="3" draggable="true" class="tile" src="../images/tile9b.png"></td>' +
									'</tr>' +
									'<tr>' +
										'<td><img id="7" name="10" draggable="true" class="tile" src="../images/tile12a.png"></td>' +
										'<td><img id="2" name="5" draggable="true" class="tile" src="../images/tile10a.png"></td>' +
										'<td><img id="9" name="12" draggable="true" class="tile" src="../images/tile6a.png"></td>' +
									'</tr>' +
									'<tr>' +
										'<td><img id="1" name="4" draggable="true" class="tile" src="../images/tile1a.png"></td>' +
										'<td><img id="11" name="8" draggable="true" class="tile" src="../images/tile7b.png"></td>' +
										'<td><img id="4" name="1" draggable="true" class="tile" src="../images/tile1b.png"></td>' +
									'</tr>' +
								'</tbody>' +
							'</table>' +
						'</div>' +
					'</div>' +
				'</div>'

	return html;
}

var dragSrcEl = null;

function handleDragStart(e) {
	  this.style.opacity = '0.4';
	  dragSrcEl = this;
	  e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
  	if (e.preventDefault) {
    	e.preventDefault(); 
  	}

  	e.dataTransfer.dropEffect = 'move';  

  	return false;
}

function handleDragEnter(e) {
  	this.classList.add('over');
}

function handleDragLeave(e) {
  	this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
    if (e.stopPropagation) {
    	e.stopPropagation(); 
    }

    if (dragSrcEl != this) {
	    if(dragSrcEl.id == this.name){
	    	this.style.border = '3px solid #00ef0f';
	    	dragSrcEl.style.border = '3px solid #00ef0f';
	    	incrementCorrect++;
	    }
	    if(incrementCorrect == 6){
	    	var html = '<div id="congratsMessage" style="visibility: ;">' + 
								'<h1>You did it!  Awesome!</h1>' +
								'<input id="playAgainButton" value="Click here to play again!"></button>'+
							'</div>' ;
			$(html).appendTo($('#messageContainer')).hide().fadeIn(3000);
			$('#mainContainer').addClass('blur');
	    }
	}
	e.preventDefault();
    return false;
}

