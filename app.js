/*Js for play and pause video by hovering the mouse and getting away from card */
// const video1 = document.getElementById('projectvideo1');
// const video2 = document.getElementById('projectvideo2');
// const video3 = document.getElementById('projectvideo3');
// const hoverSign = document.querySelector(".hover-sign"); /*Hover sign on video */


document.querySelectorAll(".project-vidbox video")
.forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
  video.addEventListener("touchstart", () => video.play(), { passive: true });
});

// SIDEBAR ELEMENTS
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');



// const videoList =[video1, video2, video3];

// videoList.forEach(function(video){
//     video.addEventListener('mouseover', function(){
//         video.play()
//         hoverSign.classList.add("active")
//     })
//     video.addEventListener('mouseout', function(){
//             video.pause()
//             hoverSign.classList.remove("active")
//     })
// })

//sidebar elements
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
})
close.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
})

document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
  });
});

//form validation
const formBtn = document.querySelector(".contact-box button");

formBtn.addEventListener("click", () => {
  const name = document.querySelector(".contact-box input[type='text']").value.trim();
  const email = document.querySelector("input[type='email']").value.trim();
  const message = document.querySelector(".contact-box textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields");
  } else {
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:malviyapragya524@gmail.com?subject=${subject}&body=${body}`;
  }
});
