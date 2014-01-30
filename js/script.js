

$(function(){
	

	// Update the width, para makuha sa tanan ang full fledge width
	updateWidth(); $(window).on('resize', function(){
		updateWidth();
	});

	// Update the height of the elements to a minimum...
	var windowHeight = $(window).height();
	$('.parent-page').css('height', windowHeight);


	// Doing the animation of the object
	$('.menulink').click(function(e){
		e.preventDefault();

		var target = $(this).attr('href');
		var point = $(target); //$('#'+target);
		$('body').animate({ scrollTop: point.offset().top + 1 }, 600);
		
	});

	// TEMPORARY FIX: 
	$('#topbar-navigation').hide(0);

	// Top Nav Menu
	$('#small-logo-btn').hover(function(){ $(this).css('background-color', 'transparent'); });


	// Top Social Animations...
	$('#top-social-tab li').mouseover(function(){
		if ($(this).attr('id') != "top-address"){ 
			$(this).animate({ 'padding-top':'2%', 'margin-bottom':'-2%' }, 300);

			if ($(this).attr('id') == "top-phone"){
				$('#top-address').html("<span style='color:#acdcac'>(001) 803-01-0066</span>").fadeIn(300);
			} else if ($(this).attr('id') == "top-mail"){
				$('#top-address').html("<span style='color:#7cbb9b'>info@embedsourcing.com</span>").fadeIn(300);
			} else if ($(this).attr('id') == "top-fb"){
				$('#top-address').html("Find us at Facebook at EMBEDSOURCING").fadeIn(300);
			}

		}
	}).mouseout(function(){ if ($(this).attr('id') != "top-address"){ 
			$(this).animate({ 'padding-top':'0%', 'margin-bottom':'0%' }, 300);
			$('#top-address').html("2/F Building A, Permites St.<br>Tibanga, 9200 Iligan City, PH").fadeIn(300);
		}
	});


	// Scrolling action... hihihihi :)
	var currentLocation = 0;
	$(window).scroll(function(){
		// Getting the current top :)
		currentLocation = $(window).scrollTop();

		if ( currentLocation > $('#home').height() ){
			$('#topbar-navigation').show(500); //slideDown(400);
			$('.toplink').css({ 'background-color':'transparent', 'color':'white' });

			var myViewPort = viewPortLocation(currentLocation);
			if (myViewPort == "#about"){
				$('#about-link').css({ 'background-color':'white', 'color':'#ccf49d' });
			} else if (myViewPort == "#services"){
				$('#services-link').css({ 'background-color':'white', 'color':'#7cbb9b' });
			} else if (myViewPort == "#works"){
				$('#works-link').css({ 'background-color':'white', 'color':'#3b8484' });
			} else if (myViewPort == "#blog"){
				$('#blog-link').css({ 'background-color':'white', 'color':'#0c4c6c' });
			} else { $('#contact-link').css({ 'background-color':'white', 'color':'#05212f' }); }

		} else { $('#topbar-navigation').hide(500); } //.slideUp(500); }
	});
});

function viewPortLocation(location){

	// Map all the location of the viewports....
	var about    = $("#about").height() + $("#home").height(),
		services = about + $("#services").height(),
		works    = services + $('#works').height(),
		blog     = works + $('#blog').height(),
		contact  = blog + $('#contact').height();

	if (location < about){ return "#about"; }
	else if (location < services) { 
		return "#services"; 
	}
	else if (location < works){ 
		return "#works"; 
	}
	else if (location < blog){
		return "#blog";
	} else { return "#contact"; }
}


function updateWidth(){
	var windowWidth = $(window).width() - (0.01*$(window).width());
	$('.container').css('width', windowWidth);
}