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
    let hero = $("img[src*=-hero]").parent();
    console.log(hero);


    $.each(hero, function (index, val) {

      // add
    //   $(this).append("<img src='...' />");

      // remove
      $("img").hide();
      console.log("REMOVED");
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

