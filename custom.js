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
    imageVideoswap();
    // sectionVideoControls()

    setTimeout(sectionVideoControls,2000)
  }

});

// After DOM Calls
// window.onload = function () {
//     imageVideoswap();
// };


// Creaet an array for all film objects to be added
let imageFilm = [];


function imageVideoswap() {
  let heroParent = $('img[src$="-hero.jpg"]').parent();
  console.log(heroParent);

  let i = 0;

  $(heroParent).each(function (i, obj) {
    i++;

    let heroImage = $(heroParent).children().first();

    //replace the source jpg with the MP4 hosted on Vercel via GIT
    let src = $(this).find("img").attr("src").split("/");
    // let Filename = src.pop();
    // console.log(Filename);

    let hero = src[src.length - 1];
    hero = hero.replace("jpg", "mp4");

    let videoControl = "videoControl" + 1; 

    let filmHero = '<video class="hero-video ' + videoControl + '" muted autoplay playsinline="" preload="auto" loop="false" style="-webkit-border-radius: 1px; opacity: 1; object-fit: cover; object-position: 50% 50%;"><source id="videoMP4" src="https://minmud.vercel.app/film/' + hero + '" type="video/mp4"></video>';

    // let filmHero = '<video class="hero-video" controls="false" muted autoplay playsinline="" preload="auto" loop="false" style="-webkit-border-radius: 1px; opacity: 1; object-fit: cover; object-position: 50% 50%;"><source id="videoMP4" src="https://minmud.vercel.app/film/' + hero + '" type="video/mp4"></video>';

    // add video to the source images parent div
    $(this).prepend(filmHero);
    let currVideo = $(this).find("video");
    let currImage = $(this).find("img");

    $(currVideo).on({
      play: function() {
        gsap.to(currImage, .5, { opacity: 0});
      }
    });

  });

}



// ADD VIDEO CONTROLS TO BACKGROUND VIDEOS
function sectionVideoControls() {

  let i = 0;

  $(".section-background").each(function (i, obj) {

    if ($(this).find('.hero-video').length !== 0) {

      i++
      console.log("VIDEO BACKGROUND DETECTED")
      let currVideo = $(this).find("video");
      console.log(currVideo);
      
      let overlayDiv = $(this).parent().siblings().first().find(".content");
      console.log(overlayDiv);

      let thisplayControl = "play" + i;

      $(overlayDiv).append('<img class="playControl ' + thisplayControl + '" src="https://minmud.vercel.app/controls/play.svg">');

      // let filmHero = '<video class="hero-video" muted autoplay playsinline="" preload="auto" loop="false" style="-webkit-border-radius: 1px; opacity: 1; object-fit: cover; object-position: 50% 50%;"><source id="videoMP4" src="https://minmud.vercel.app/film/' + hero + '" type="video/mp4"></video>';



      // $(currVideo).on({
      //   play: function () {
      //     gsap.to(currImage, .5, { opacity: 0 });
      //   }
      // });
    




      // var playButton = document.getElementById("play_button");
      // // Event listener for the play/pause button
      // playButton.addEventListener("click", function() {
      //   if (video.paused == true) {
      //     // Play the video
      //     video.play();
      
      //     // Update the button text to 'Pause'
      //     playButton.innerHTML = "Pause";
      //   } else {
      //     // Pause the video
      //     video.pause();
      
      //     // Update the button text to 'Play'
      //     playButton.innerHTML = "Play";
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