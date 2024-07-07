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

//   $.each(heroParent, function (index, val) {
$(heroParent).each(function (i, obj) {

    // var toRemove = $(this).find("img");

    let heroImage = $(heroParent).children().first();;
    console.log( heroImage);



    // console.log("to remove" + toRemove);

    // var src = $(this).find("img").attr("src").split("/");
    // var hero = src[src.length - 1];
    // hero = hero.replace("jpg", "mp4");

    // let filmHero = '<video class="hero-video" controls="true" muted autoplay playsinline="" preload="auto" loop="false" style="opacity: 1;"><source id="videoMP4" src="https://minmud.vercel.app/film/' + hero +'" type="video/mp4"></video>';

    // // attach video to image parent
    // $(this).prepend(filmHero);
    // let thisVid = $(this).find("img");
    // let currentHero = thisVid.add( hero );
    
    
    // toRemove = thisVid.add( toRemove ); 

    // console.log("currentHero" + currentHero);

    // time = setInterval(function () {
    //   if (!currentHero.paused) {
    //     // gsap.to(currentHero ".hero-video", .5, {opacity: 1});
    //     // gsap.to(currentHero toRemove, .5, {opacity: 0, delay: .5});
        $(heroImage).hide();

    //     console.log("PLAYING")
    //     clearInterval(time);
    //   }
    // }, 500);

  });

  // code = $(this).attr('id');
  // ids.push(code);

  //   $.each(classLoop, function (index, val) {
  //     var a = $(val).find("a").eq(1);
  //     // console.log(a)
  //     var b = $(a).attr("href");
  //     // console.log(b)
  //     var c = "/" + b;
  //     // console.log(c)
  //     $(a).prop("href", c);
  //   });
}
