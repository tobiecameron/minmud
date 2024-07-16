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
  setTimeout(imageVideoswap(), 2000);
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

  let i = 1;

  $(heroParent).each(function (i, obj) {

    let heroImage = $(heroParent).children().first();

    //replace the source jpg with the MP4 hosted on Vercel via GIT
    let src = $(this).find("img").attr("src").split("/");
    let Filename = src.pop();
    console.log(Filename);

    let hero = src[src.length - 1];
    hero = hero.replace("jpg", "mp4");
    let filmHero = '<video class="hero-video" controls="true" muted autoplay playsinline="" preload="auto" loop="false" style="opacity: 1;"><source id="videoMP4" src="https://minmud.vercel.app/film/' + hero + '" type="video/mp4"></video>';

    // add video to the source images parent div
    $(this).prepend(filmHero);
    let currImage = $(this).find("img");
    gsap.to(currImage, 1, { opacity: .5, delay: 1});

    // console.log("current Image" + currImage);

    // time = setInterval(function () {
    //   if (!filmHero.paused) {
    //     clearInterval(time);
    //     console.log("PLAYING")
    //     gsap.to(currImage, 1, { opacity: .5, delay: 1});
        

    //     // Filename.hide();
    //   }
    // }, 500);
  });

}
