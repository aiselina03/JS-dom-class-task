// const img = document.querySelector("img");
// let x = 0;
// let y = 0;

// document.body.addEventListener("keydown", function (e) {
//   switch (e.code) {
//     case "KeyA":
//       x -= 20;
//       img.style.left = x + "px";
//       break;
//     case "KeyD":
//       x += 20;
//       img.style.left = x + "px";
//       break;
//     case "KeyW":
//       y -= 20;
//       img.style.top = y + "px";
//       break;
//     case "KeyS":
//       y += 20;
//       img.style.top = y + "px";
//       break;

//     default:
//       break;
//   }
// });

//task
// const div=document.querySelector(".div")
// const button=document.querySelector(".btn1")
// button.addEventListener("click", function () {
//     div.classList.remove("none")
// })

// const icon=document.querySelector(".fa-regular")
// icon.addEventListener("click", function () {
//     div.classList.add("none")
// })

const img = document.querySelector(".photos img");
const blur = document.querySelector(".blur");
const button = document.querySelector(".btns button");

button.addEventListener("click", function () {
  img.classList.remove("blur");
  
});
