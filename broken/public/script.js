$(document).ready(function(){

	//Fades out whatever's in the Areas of Practice Copy div,
	//hides whatever practice copy is currently displayed,
	//shows the copy we want
	//and fades back in.
	var changeCopy = function(copyArea){
		$('#aopCopy').fadeOut(function(){
			$('.pCopy').hide();
			$(copyArea).show();
		})
		.fadeIn();
	};

	$('#home').show();

	$('#AoPLink').click(function(){
		$('#enclosing').fadeOut(function(){
			$('.copy').hide();
			$('.pCopy').hide();
			$('#practiceAreas').show();
		})
		.fadeIn();
	});

	$('.aopLink').click(function(){
		changeCopy("#" + $(this).attr('id') + "Copy");
	});

	$('#contactLink').click(function(){
		$('#enclosing').fadeOut(function(){
			$('.copy').hide();
			$('#contact').show();
		})
		.fadeIn();
	});

	$('#aboutLink').click(function(){
		$('#enclosing').fadeOut(function(){
			$('.copy').hide();
			$('#about').show();
		})
		.fadeIn();
	});
});