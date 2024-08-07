// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // gsap code here!
});

// Early JS calls
$(document).ready(function () {
  console.log("------- M I N M U D 2beta");

  if (window.frameElement == null) {
    imageSectionvideoswap();

  }
});

// After DOM Calls
// window.onload = function () {
//     imageVideoswap();
// };

var sectionVideos = new Array();

function imageSectionvideoswap() {

  let heroParent = $('img[data-image$="-hero.jpg"]').parent();
  let i = 0;

  $(heroParent).each(function (i, obj) {

    if ($(this).hasClass('section-background')) {
      i++;
      console.log("This is a Section Backround Video" + i)


      //replace the source jpg with the MP4 hosted on Vercel via GIT
      let src = $(this).find("img").attr("data-src").split("/");
      let hero = src[src.length - 1];
      hero = hero.replace("jpg", "mp4");

      let videoControl = "videoControl" + i;
      let filmHero = '<video id="' + videoControl + '" class="hero-video ' + videoControl + '" muted autoplay playsinline="" preload="auto" loop="false" style="-webkit-border-radius: 1px; opacity: 1; object-fit: cover; object-position: 50% 50%;"><source id="videoMP4" src="https://minmud.vercel.app/film/' + hero + '" type="video/mp4"></video>';

      // add video to the source images parent div
      $(this).prepend(filmHero);
      let currVideo = $(this).find("video");
      let currImage = $(this).find("img");

      sectionVideos.push(currVideo);
      console.log(sectionVideos);

      $(currVideo).on({
        play: function () {
          $(currImage).removeClass('loaded');
          gsap.to(currImage, .5, { opacity: 0, delay: 1 });
          gsap.set(currImage, { display: "none", delay: 1.5 });
        }
      });

      console.log("VIDEO FULL BACKGROUND DETECTED")

      var overlayDiv;
      var overlayDivContent;
      var thisOverlay;

      console.log("HAS SECTION BACKGROUND CLASS" + i);
      $(this).parent().siblings().first().addClass('sectionOverlay');
      overlayDiv = $(this).parent().siblings().first();

      overlayDivContent = $(this).parent().siblings().first().find(".content");

      $(this).find(".section-background-overlay").addClass('sectionBackgroundOverlay');

      thisOverlay = $(this).find(".section-background-overlay");

      let thisshowControl = "show" + i;
      let thishideControl = "hide" + i;

      let thisoverlayDivContent = overlayDivContent + i;

      $(overlayDiv).append(
        '<img id="' + thisshowControl + '" class="showControl ' + thisshowControl + '" src="https://minmud.vercel.app/controls/show.svg"><img id="' + thishideControl + '" class="hideControl ' + thishideControl + '" src="https://minmud.vercel.app/controls/hide.svg">'
      );

      gsap.to('.' + thisshowControl, .25, { opacity: .7, display: "block", delay: 1 });

      var showButton = document.getElementById(thisshowControl);
      var hideButton = document.getElementById(thishideControl);
      var vid = document.getElementById('videoControl' + i);
      // var allVids = document.getElementById('video');

      showButton.addEventListener("click", function () {
        console.log("SHOW LISTENER ACTIVATE" + i);
        if (vid.paused == false) {
          // Reveal the video
          $('body video').each(function () {
            /*** Do it here globally ***/
            $(this).prop('muted', true);
          });
          vid.muted = false;
          gsap.to('.sectionOverlay, .sectionOverlay .content', 0, { opacity: 1 }); 
          gsap.to('.sectionBackgroundOverlay', 0, { opacity: .55 });  
          
          $('.showControl').each(function () {
            /*** Do it here globally ***/
            console.log("A Show Control is revealling");
            gsap.to($(this), 0, { opacity: .7, display: "block" });
          });

          $('.hideControl').each(function () {
            /*** Do it here globally ***/
            console.log("A Hide Control is hiding");
            gsap.to($(this), 0, { opacity: 0, display: "none" });
          });
      
      


          gsap.to([overlayDivContent, thisOverlay], .25, { opacity: 0 });
          gsap.to("." + thisshowControl, .25, { opacity: 0, display: "none" });
          gsap.to("." + thishideControl, .25, { opacity: .7, display: "block", delay: .25 });
        }
      });

      hideButton.addEventListener("click", function () {
        if (vid.paused == false) {
          // Reveal the video
          vid.muted = true;


          $('.showControl').each(function () {
            /*** Do it here globally ***/
            console.log("A Show Control is revealling");
            gsap.to($(this), 0, { opacity: .7, display: "block" });
          });

          $('.hideControl').each(function () {
            /*** Do it here globally ***/
            console.log("A Hide Control is hiding");
            gsap.to($(this), 0, { opacity: 0, display: "none" });
          });
      


          gsap.to(thisOverlay, .25, { opacity: .55 });
          gsap.to(overlayDivContent, .25, { opacity: 1 });
          gsap.to("." + thishideControl, .25, { opacity: 0, display: "none" });
          gsap.to("." + thisshowControl, .25, { opacity: .7, display: "block", delay: .25 });
        }
      });

    }
  });
  imageGalleryvideoswap();
}


function imageGalleryvideoswap() {

  
  $('.gallery-block').each(function (i, obj) {
    $(this).parent().closest('div').addClass('galleryParent');
    console.log("Located Gallery Block parent");
  });


  let heroParent = $('img[data-image$="-hero.jpg"]').parent();
  let i = 0;

  $(heroParent).each(function (i, obj) {
    // if ($(this).parent().hasClass('margin-wrapper') || ($(this).parent().hasClass('sqs-image-content'))) {
    if ($(this).find('.image-slide-title') || ($(this).parent().hasClass('sqs-image-content'))) {
      i++;
      //replace the source jpg with the MP4 hosted on Vercel via GIT
      let src = $(this).find("img").attr("data-src").split("/");
      // console.log(src);

      let hero = src[src.length - 1];
      hero = hero.replace("jpg", "mp4");

      let videoControl = "videoControl" + i;
      let filmHero = '<video id="' + videoControl + '" class="hero-video ' + videoControl + '" muted autoplay playsinline="" preload="auto" loop="false" style="-webkit-border-radius: 1px; opacity: 1; object-fit: cover; object-position: 50% 50%;"><source id="videoMP4" src="https://minmud.vercel.app/film/' + hero + '" type="video/mp4"></video>';

      // add video to the source images parent div
      $(this).prepend(filmHero);
      let currVideo = $(this).find("video");
      let currImage = $(this).find("img");



      ////////////* For the Gallery blocks */

      $(this).parent().closest('div').addClass('galleryFilm');  //your function

      let thisBackground = '<div class="gallery-overlay" style="transition-timing-function: ease; transition-duration: 0.9s; transition-delay: 0.229091s;"></div>';

      let thisLink = $(this).attr('href');
      console.log("the link from the gallery" + thisLink);

      let thisButton = '<div class="sqs-block-button-container sqs-block-button-container--left preFade fadeIn galleryButton" data-animation-role="button" data-alignment="left" data-button-size="medium" data-button-type="primary" id="yui_3_17_2_1_1722245060304_151" style="transition-timing-function: ease; transition-duration: 0.9s; transition-delay: 0.229091s;"><a href="' + thisLink + '" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" data-initialized="true">View Project</a></div>'


      // THis needs solving!!!

      
      // if ($(this).parent().eq(0).find('.image-slide-title')) {
      // if ($(this).parent().children('div').find('.image-slide-title')) {

      // if ($(this).find(".image-slide-title")) {

      if ($(this).find(".image-slide-title").text().trim().length > 0) {
        $(this).append(thisBackground);
      }
      // $(this).append(thisBackground);
      // }

      // END

      $(this).parent().find('.image-slide-title').append(thisButton);



      /* For IMAGE BLOCKS ONLY */
      if ($(this).parent().hasClass('sqs-image-content')) {
        let altText = $(this).find('img').attr('alt');
        console.log(altText);

        let imageOverlay = '<div class="image-slide-title">' + altText + '<div class="sqs-block-button-container sqs-block-button-container--left preFade fadeIn galleryButton" data-animation-role="button" data-alignment="left" data-button-size="medium" data-button-type="primary" id="yui_3_17_2_1_1722245060304_151" style="transition-timing-function: ease; transition-duration: 0.9s; transition-delay: 0.229091s;"><a href="' + thisLink +  '" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" data-initialized="true">View Project</a></div></div>'
        
        $(this).append(imageOverlay);
      }

      // setTimeout(
      //   function() 
      //   {
      //     if ($(this).find(".image-slide-title")) {
      //       console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>FINDING gallery-overlay")
      //       // $(this).append(thisBackground);
      //       // $("div.gallery-overlay").remove();
      //     }    
      //     //do something special
      //   }, 5000);

      


      $(currVideo).on({
        play: function () {
          $(currImage).removeClass('loaded');
          gsap.to(currImage, .5, { opacity: 0, delay: 1 });
          gsap.set(currImage, { display: "none", delay: 1.5 });
        }
      });
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