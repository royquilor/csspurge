function each(elements, callback) {
  for (var index = 0; index < elements.length; index++) {
    callback(elements.item(index))
  }
}

// ADD class tr to all tr tags
// var tr = document.querySelectorAll("tr")
//
// each(tr, function(element) {
//   element.className += " tr"
// })

//ADD class tr to all tr tags
// document.querySelector("tr.wikipedia").className += " black"

// each(tr, function(element) {
//   element.className += " blue"
// })

// Get the tr, and when the user clicks on it, execute myFunction
// var tr = document.getElementsByClassName("tr");
var tr = document.getElementsByTagName("tr");

    //myFunction()
var selectedFunction = function() {
    each(tr, function(element) {
            element.classList.remove("class", "selected");
        });
    this.classList.toggle("selected");
};

for (var i = 0; i < tr.length; i++) {
    tr[i].addEventListener('click', selectedFunction, false);
};

var position = document.querySelectorAll("tr td:first-child")
var sites = document.querySelectorAll("tr td:nth-child(2)")
var float = document.querySelectorAll("tr td:nth-child(3)")
var colors = document.querySelectorAll("tr td:nth-child(4)")
var fontSizes = document.querySelectorAll("tr td:nth-child(5)")
var fontFamilies = document.querySelectorAll("tr td:nth-child(6)")
var specificity = document.querySelectorAll("tr td:nth-child(7)")
var mediaQueries = document.querySelectorAll("tr td:nth-child(8)")
var styleTags = document.querySelectorAll("tr td:nth-child(9)")
var styleLinks = document.querySelectorAll("tr td:nth-child(10)")
var fileSize = document.querySelectorAll("tr td:nth-child(11)")
var totalScore = document.querySelectorAll("tr td:nth-child(12)")
// position
for(var count=0; count < position.length; count++) {
    position.item(count).setAttribute("class", "lp");
};
// sites
for(var count=0; count < sites.length; count++) {
    sites.item(count).setAttribute("class", "ls tl");
};
// float
for(var count=0; count < float.length; count++) {
    float.item(count).setAttribute("class", "lf");
};
// colors
for(var count=0; count < colors.length; count++) {
    colors.item(count).setAttribute("class", "lc");
};
// fontSizes
for(var count=0; count < fontSizes.length; count++) {
    fontSizes.item(count).setAttribute("class", "lfs");
};
// fontFamilies
for(var count=0; count < fontFamilies.length; count++) {
    fontFamilies.item(count).setAttribute("class", "lff");
};
// specificity
for(var count=0; count < specificity.length; count++) {
    specificity.item(count).setAttribute("class", "lsp");
};
// mediaQueries
for(var count=0; count < mediaQueries.length; count++) {
    mediaQueries.item(count).setAttribute("class", "lmq");
};
// styleTags
for(var count=0; count < styleTags.length; count++) {
    styleTags.item(count).setAttribute("class", "lst");
};
// styleLinks
for(var count=0; count < styleLinks.length; count++) {
    styleLinks.item(count).setAttribute("class", "lsl");
};
// fileSize
for(var count=0; count < fileSize.length; count++) {
    fileSize.item(count).setAttribute("class", "lfskb");
};
// totalScore
for(var count=0; count < totalScore.length; count++) {
    totalScore.item(count).setAttribute("class", "lts");
};


var options = {
  valueNames: ['lp', 'ls', 'lf', 'lc', 'lfs', 'lff', 'lsp', 'lmq', 'lst', 'lsl', 'lfskb', 'lts']
};

var leagueList = new List('league', options);

// document.querySelector("td:first-child").setAttribute("class", "company")

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Animation

var myEfficientFn = debounce(function() {

$(window).scroll(function() {

  var topOfWindow = $(window).scrollTop();

  var imagePos = $('.cssfilesize').offset().top;

  $('.chart .bar').each(function(){

    if (imagePos < topOfWindow+400) {
      $(this).addClass("nice");
    }
  });
});

}, 100);

window.addEventListener('scroll', myEfficientFn);

// var myEfficientFn = debounce(function() {
//
// $(window).scroll(function() {
//
//   var topOfWindow = $(window).scrollTop();
//
//   var imagePos = $('.animated').offset().top;
//
//   $('.gridscores .browser').each(function(){
//
//     if (imagePos < topOfWindow+500) {
//       $(this).addClass("fadeInLeft");
//     }
//   });
//   $('.gridscores .iwatch').each(function(){
//     var imagePos = $(this).offset().top;
//     if (imagePos < topOfWindow+500) {
//       $(this).addClass("fadeInLeft");
//     }
//   });
//   $('.awwesome .browser').each(function(){
//     var imagePos = $(this).offset().top;
//     if (imagePos < topOfWindow+500) {
//       $(this).addClass("fadeInUp");
//     }
//   });
//   $('.branding picture').each(function(){
//     var imagePos = $(this).offset().top;
//     if (imagePos < topOfWindow+900) {
//       $(this).addClass("fadeIn");
//     }
//   });
//   $('.mobile .iphone').each(function(){
//     var imagePos = $(this).offset().top;
//     if (imagePos < topOfWindow+900) {
//       $(this).addClass("fadeInLeft");
//     }
//   });
//   $('.intranet .browser').each(function(){
//     var imagePos = $(this).offset().top;
//     if (imagePos < topOfWindow+500) {
//       $(this).addClass("fadeInRight");
//     }
//   });
//   $('.intranet figure').each(function(){
//     var imagePos = $(this).offset().top;
//     if (imagePos < topOfWindow+500) {
//       $(this).addClass("fadeIn");
//     }
//   });
//   $('.lily .browser').each(function(){
//     var imagePos = $(this).offset().top;
//     if (imagePos < topOfWindow+500) {
//       $(this).addClass("fadeInLeft");
//     }
//   });
// });
//
// }, 100);
//
// window.addEventListener('scroll', myEfficientFn);
