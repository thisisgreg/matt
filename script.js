//smooth scroll script
			$(function() {
			  $('a[href*=#]:not([href=#])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html,body').animate({
			          scrollTop: target.offset().top
			        }, 1000);
			        return false;
			      }
			    }
			  });
			});

//slide toggle video loading script
//$(function() {
//	alert("I'm loaded!");
//	$("#thumb1").click(function() {
//		$(".vidwrapper").slideup(1,'linear');
//		$("#vid1").slideToggle(500, 'linear');
//	});
//});

$(function() {
		$("#thumb1").click(function() {
			$(".video").slideUp(500, 'linear', function() {
				$("#vid1").slideDown(500, 'linear');
			});
		});
		$("#thumb2").click(function() {
			$(".video").slideUp(500, 'linear', function() {
				$("#vid2").slideDown(500, 'linear');
			});
		});
		$("#thumb3").click(function() {
			$(".video").slideUp(500, 'linear', function() {
				$("#vid3").slideDown(500, 'linear');
			});
		});
		$("#thumb4").click(function() {
			$(".video").slideUp(500, 'linear', function() {
				$("#vid4").slideDown(500, 'linear');
			});
		});
		$("#thumb5").click(function() {
			$(".video").slideUp(500, 'linear', function() {
				$("#vid5").slideDown(500, 'linear');
			});
		});	
});

//First get the  iframe URL
var url = $('#YourIFrameID').attr('src');

//Then assign the src to null, this then stops the video been playing
$('#YourIFrameID').attr('src', '');

// Finally you reasign the URL back to your iframe, so when you hide and load it again you still have the link
$('#YourIFrameID').attr('src', url);
//New video loading script


// This is refactoring! Revisit later.

//function mySlideDownFunction() {
//	$("#vid1").slideDown(500, 'linear');
//}

//$('.video').slideUp(500, 'linear', mySlideDownFunction);