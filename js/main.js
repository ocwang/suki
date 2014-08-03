
document.createElement("section"); // Fix bc IE can't render section tag

$(window).on({
  load:function(){
    calculateHeaderShadow();
    resizeSplash();
  },
  resize:function(){
    calculateHeaderShadow();
    resizeSplash();
  },
  scroll:function(){
    calculateHeaderShadow();
  }
});

// Background image parralax
$(document).ready(function(){
    var $window = $(window);

    // If initial window size is larger than tablet
    if( $window.width() > 768){
      $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {
          var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));

          // Put together our final background position
          var coords = '50% '+ yPos + 'px';

          // Move the background
          $bgobj.css({ backgroundPosition: coords });
        });
      })
    }
});

// Smooth scrolling for anchor links on the page
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

// Resize Splash div to match window size
function resizeSplash() {
  var h = $(window).height();
  $("#splash").css('height', h);
}

function calculateHeaderShadow() {
  if($(window).width() > 768){
    if ($(".navbar").offset().top) {
      $("nav").addClass("has-shadow");
    } else {
      $("nav").removeClass("has-shadow");
    }
  } else {
    $('nav').addClass("has-shadow");
  }
}