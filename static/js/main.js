"use strict"
// for (var i = 0; i < elements.length; i++)

let toggleNav = $("#toggleNav");
let toggleMenu = $(".navigation-menu");
let toggleRotImg = $(".cross-nav");
let videoBtnToggle = $(".artist-btn p");
let video = $(".artist-video");

toggleNav.on("click", function() {
  toggleMenu.toggleClass("activated");
  toggleNav.toggleClass("activated");
  toggleRotImg.toggleClass("activated");
});

videoBtnToggle.on("click", function() {
  video.toggleClass("activated");
});


let toggleCrewInfo = $(".crew-holder");
let toggleCrewInfoText = $(".crew-info");

toggleCrewInfo.on("click", function() {
  toggleCrewInfoText.toggleClass("activated");
});



let btncross = $(".toggle-artist-btn img");

$(".artist-container").on("click", function() {
  btncross.toggleClass("activated");
});
console.log(btncross);



let art = document.getElementsByClassName("artist-container");
let i
for (i = 0; i < art.length; i++) {
  art[i].addEventListener("click", function() {
        var btncross = document.getElementsByClassName("toggle-artist-btn");
    this.classList.toggle("activated");
    let panelo = this.nextElementSibling;
    if (panelo.style.maxHeight === "1250px") {
      panelo.style.maxHeight = "0px";
    } else {
      panelo.style.maxHeight = "1250px";
    }
  });
}

let acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activated");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight === "500px") {
      panel.style.maxHeight = "0px";
    } else {
      panel.style.maxHeight = "500px";
    }
  });
}



// //zone de déclenchement
// let artistTgrTgl = $("div.artist-placeholder");
// //croix bleu
// let artistInfoBtn = $("button.toggle-artist-btn");
// //zone extensive
// let artistTgl = $("li.artist-info-trigger-zone");
//
// for (let trigger of artistTgl) {
//   trigger.onclick = function() {
//       trigger.classList.toggle("activated");
//   };
// }



// //zone de déclenchement
// let workerTgrTgl = $("div.team-placeholder");
// //croix bleu
// let workerInfoBtn = $("button.toggle-team-member-btn");
// //zone extensive
// let workerTgl = $("li.worker-info-trigger-zone");
//
// for (let trigger of workerTgl) {
//   trigger.onclick = function() {
//       trigger.classList.toggle("activated");
//   };
// }



// let window_width = $(window).width() - $("#lefty-scroll").width();
// let document_height = $(document).height() - $(window).height();
// $(function () {
//     $(window).scroll(function () {
//         let scroll_position = $(window).scrollTop();
//                   // console.log(scroll_position);
//         if(scroll_position > 1600){
//           let object_position_left = window_width * (scroll_position / document_height);
//           $("#lefty-scroll").css({
//               "transform": "translate3d(" + object_position_left + "px, 0px, 0px)"
//           });
//         }else{
//           $("#lefty-scroll").css({
//               "transform": "translate3d(0px, 0px, 0px)"
//           });
//         }
//     });
// });











// workerTgrTgl.on("click", function() {
//       workerInfoBtn.toggleClass("activated");
//       workerTgl.toggleClass("activated");
//   });



// $(document).ready(function(){
//     workerTgrTgl.on("click", function() {
//       //zone info panel
//       let $workerInfo = $("artist-info");
//         let $currentPanel = $(this).next("artist-info");
//         if($currentPanel.is(":hidden")){
//         	$(this).next("artist-info").slideDown("fast");
//         }else{
//         	$(this).next("artist-info").slideUp("fast");
//         }
//     	$workerInfo.not($currentPanel).slideUp("fast");
//     });
// });
















//
// document.onclick = function(e) {
//   if (!e.target.classList.contains(".expand")) {
//     for (let worker of workerList) {
//      if (e.target.parentNode !== worker)
//       worker.classList.remove("activated");
//    };
//  };
// };
