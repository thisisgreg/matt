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
    $("li.vid-thumb").click(function(){
        //close current vid (slide up, set iframe src to null, set back to src)        
        $('div.video:visible').slideUp(250, 'linear', function() {
            var url = $(this).children('iframe').attr('src');
            $(this).children('iframe').attr('src', '');
            $(this).children('iframe').attr('src', url);
        });
        
        //get video # from id of clicked thumb
        var num = $(this).attr('id').split('_')[1];
        
        //open clicked vid (slide down)
        $('div#vid_'+num).slideDown(250,'linear');
    });
    
    /*      
    $("#thumb_1").click(function() {
        $(".video").slideUp(500, 'linear', function() {
            $("#vid_1").slideDown(500, 'linear');
        });
    });
    $("#thumb_2").click(function() {
        $(".video").slideUp(500, 'linear', function() {
            $("#vid_2").slideDown(500, 'linear');
        });
    });
    $("#thumb_3").click(function() {
        $(".video").slideUp(500, 'linear', function() {
            $("#vid_3").slideDown(500, 'linear');
        });
    });
    $("#thumb_4").click(function() {
        $(".video").slideUp(500, 'linear', function() {
            $("#vid_4").slideDown(500, 'linear');
        });
    });
    $("#thumb_5").click(function() {
        $(".video").slideUp(500, 'linear', function() {
            $("#vid_5").slideDown(500, 'linear');
        });
    });	
    */
});

$(function() {
    $("#thumb_1")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "images/thumbnails/ttrroll.jpg";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("images/thumbnails/ttrroll.jpg", "images/thumbnails/roof.jpg");
            $(this).attr("src", src);
        });
});

//First get the  iframe URL
//var url = $('#YourIFrameID').attr('src');

//Then assign the src to null, this then stops the video been playing
//$('#YourIFrameID').attr('src', '');

// Finally you reasign the URL back to your iframe, so when you hide and load it again you still have the link
//$('#YourIFrameID').attr('src', url);
//New video loading script


// This is refactoring! Revisit later.

//function mySlideDownFunction() {
//	$("#vid1").slideDown(500, 'linear');
//}

//$('.video').slideUp(500, 'linear', mySlideDownFunction);