// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // gsap code here!
});

// Early JS calls
$(document).ready(function () {
    console.log("------- M I N M U D 2beta");
  // $('html, body').animate({scrollTop: $(window.location).top}, 0);
});

// After DOM Calls
window.onload = function () {
    imageVideoswap();
};





// Creaet an array for all film objects to be added
let imageFilm = [];


function imageVideoswap() {
    let heroParent = $('img[src$="-hero.jpg"]').parent();
    console.log(heroParent);


    $.each(heroParent, function (index, val) {
        var src = $(this).find('img').attr('src').split('/');
        var hero = src[src.length - 1];
        hero = hero.replace('jpg', 'mp4');
        console.log(hero);
        let filmHero = '<video class="videoControl showreelVideo" controls="" playsinline="" preload="auto" loop="false" style="opacity: 1;"><source id="videoMP4" src="https://minmud.vercel.app/film/' + hero + '" type="video/mp4"></video>';
      // remove
      $("img").hide();
      $(this).append(filmHero);

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

