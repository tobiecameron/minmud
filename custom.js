// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // gsap code here!
});

// Early JS calls
$(document).ready(function () {
  console.log("------- M I N M U D 2beta");
  // $('html, body').animate({scrollTop: $(window.location).top}, 0);
  //   imageVideoswap();

  if ( window.frameElement == null ) {
    // imageVideoswap();

    setTimeout(imageVideoswap,0)
    // sectionVideoControls()

    setTimeout(sectionVideoControls,300)
  }

});

// After DOM Calls
// window.onload = function () {
//     imageVideoswap();
// };



// Creaet an array for all film objects to be added
let imageFilm = [];

function imageVideoswap() {
  // let heroParent = $('img[src$="-hero.jpg"]').parent();
  let heroParent = $('img[data-image$="-hero.jpg"]').parent();

  // console.log(heroParent);
  // console.log(heroGallery);

  let i = 0;

  $(heroParent).each(function (i, obj) {
    i++;
    //replace the source jpg with the MP4 hosted on Vercel via GIT
    let src = $(this).find("img").attr("data-src").split("/");
    // console.log(src);
   
    let hero = src[src.length - 1];
    hero = hero.replace("jpg", "mp4");

    let videoControl = "videoControl" + i; 
    let filmHero = '<video id="'+ videoControl +'" class="hero-video ' + videoControl + '" muted autoplay playsinline="" preload="auto" loop="false" style="-webkit-border-radius: 1px; opacity: 1; object-fit: cover; object-position: 50% 50%;"><source id="videoMP4" src="https://minmud.vercel.app/film/' + hero + '" type="video/mp4"></video>';

    // add video to the source images parent div
    $(this).prepend(filmHero);
    let currVideo = $(this).find("video");
    let currImage = $(this).find("img");

    ////////////* For the Gallery blocks */
    if ($(this).parent().hasClass('margin-wrapper')){
        $(this).parent().closest('div').addClass('galleryFilm');  //your function

        let thisLink = $(this).attr('href');
        console.log("the link from the gallery" + thisLink);

        let thisButton = '<div class="sqs-block-button-container sqs-block-button-container--left preFade fadeIn galleryButton" data-animation-role="button" data-alignment="left" data-button-size="medium" data-button-type="primary" id="yui_3_17_2_1_1722245060304_151" style="transition-timing-function: ease; transition-duration: 0.9s; transition-delay: 0.229091s;"><a href="' + thisLink + '" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" data-initialized="true">View Project</a></div>'
        
        // add video to the source images parent div
        $(this).parent().closest('div').append(thisButton);
    }
    /////////////* end gallery vlocks */

    // console.log(currImage);

    $(currVideo).on({
      play: function() {
        $(currImage).removeClass('loaded');
        gsap.to(currImage, .5, { opacity: 0, delay: 1});
        // gsap.to(currImage, .5, { display: "none"});
      }
    });

  });

}



// ADD VIDEO CONTROLS TO BACKGROUND VIDEOS
function sectionVideoControls() {

  let x = 0;

  $(".section-background").each(function (i, obj) {

    if ($(this).find('.hero-video').length !== 0) {
      x++
      console.log("VIDEO BACKGROUND DETECTED")
      //  define the overlay elements


      var overlayDiv;
      var overlayDivContent;
      var thisOverlay;


      /* For sections wiht B A C K G R O U N D  images */
      // if ($(this).parent().hasClass('section-background')) {
        overlayDiv = $(this).parent().siblings().first();
        overlayDivContent = $(this).parent().siblings().first().find(".content");
        thisOverlay = $(this).find(".section-background-overlay");
      // }


      /* For gallery blocks with images */
      // if ($(this).parent().hasClass('margin-wrapper')){
        // overlayDiv = $(this).parent().siblings().first();
        // overlayDivContent = $(this).parent().siblings().first().find(".content");
        // thisOverlay = $(this).find(".section-background-overlay");
      // }



      let thisshowControl = "show" + x;
      let thishideControl = "hide" + x;

      let thisoverlayDivContent = overlayDivContent + x;

      $(overlayDiv).append(
        '<img id="'+ thisshowControl +'" class="showControl ' + thisshowControl + '" src="https://minmud.vercel.app/controls/show.svg"><img id="'+ thishideControl +'" class="hideControl ' + thishideControl + '" src="https://minmud.vercel.app/controls/hide.svg">'
      );
      
      gsap.to('.' + thisshowControl, .25, { opacity: .7, display:"block", delay: 1});

      var showButton = document.getElementById(thisshowControl);
      var hideButton = document.getElementById(thishideControl);
      var vid = document.getElementById('videoControl' + x);
      // var allVids = document.getElementById('video');

      showButton.addEventListener("click", function() {
        if (vid.paused == false) {
          // Reveal the video
     
          $('body video').each(function(){
            /*** Do it here globally ***/
            $(this).prop('muted', true);
         });


          vid.muted = false;
          gsap.to([overlayDivContent, thisOverlay], .25, { opacity: 0});
          gsap.to("." + thisshowControl, .25, { opacity: 0, display:"none"});
          gsap.to("." + thishideControl, .25, { opacity: .7, display:"block", delay: .25});
        }
      });

      hideButton.addEventListener("click", function() {
        if (vid.paused == false) {
          // Reveal the video
          vid.muted = true;
          gsap.to(thisOverlay, .25, { opacity: .55});
          gsap.to(overlayDivContent, .25, { opacity: 1});
          gsap.to("." + thishideControl, .25, { opacity: 0, display:"none"});
          gsap.to("." + thisshowControl, .25, { opacity: .7, display:"block", delay: .25});
        }
      });


      // showButton.addEventListener("click", function() {
      //   if (vid.paused == false) {
      //     // Reveal the video
      //     vid.muted = false;
      //     gsap.to(thisoverlayDivContent, .5, { opacity: 0});
      //   }
        
      //   if (vid.muted == false) {
      //     // Play the video
      //     vid.play();
      //     vid.muted = false;      
      //   }
      // });
    }

  });
}








/*

// THE FOLLOWING MAY NOT BE NECCESARY WITH CHROME/SQUAREPACE BUILT IN PAUSE WHEN OUT OF FOCUS

// Limitation: Does not work if the element is
// out of view because it is too far right or left
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

setInterval(function() {
  $('video').each(function(){

      let id = $(this).attr("id");
      let played = $(this).attr("played");

      if ($(this).isInViewport()) {
          if (played == "false") { 
              $(this)[0].play();
              $(this).attr("played", "true");  
          }
      } else {
          if (played == "true") { 
              $(this)[0].pause();
              $(this).attr("played", "false");  
          }
      }
  });
}, 1000);

*/