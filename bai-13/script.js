// 1. localStorage là kho lưu trữ ở phía người dùng
// lưu trữ dữ liệu vô thời hạn, cho đến khi người dùng xóa cache hoặc xóa lịch sử web

// localStorage.setItem("fullName", "Do Duy Tung");

const fullName = localStorage.getItem("fullName");
// console.log(fullName);

const test = document.querySelector("#test");
test.innerHTML = fullName;


//change mode
// const currentMode = localStorage.getItem("mode");
// if (currentMode) {
//   const body = document.querySelector("body");
//   body.classList.toggle(currentMode);
//   //  toggle() dùng để thực hiện luân phiên giữa việc hiện & ẩn một phần tử.
// }

// const buttonChangeMode = document.querySelector("#change-mode");
// buttonChangeMode.addEventListener("click", () => {
//   const body = document.querySelector("body");
//   body.classList.toggle("dark");

//   const currentMode = localStorage.getItem("mode");
//   if (currentMode) {
//     localStorage.setItem("mode", "");
//   } else {
//     localStorage.setItem("mode", "dark");
//   }
// });


// console.log(localStorage);
// console.log(localStorage.abc);

// 1.2. sessionStorage: là kho lưu trữ theo phiên. có khí sẽ bị mất dữ liệu khi tắt browser
// cũng có 5 phương thức như localStorage

const currentMode = sessionStorage.getItem("mode");
if (currentMode) {
  const body = document.querySelector("body");
  body.classList.toggle(currentMode);
  //  toggle() dùng để thực hiện luân phiên giữa việc hiện & ẩn một phần tử.
}

// const buttonChangeMode = document.querySelector("#change-mode");
// buttonChangeMode.addEventListener("click", () => {
//   const body = document.querySelector("body");
//   body.classList.toggle("dark");

//   const currentMode = sessionStorage.getItem("mode");
//   if (currentMode) {
//     sessionStorage.setItem("mode", "");
//   } else {
//     sessionStorage.setItem("mode", "dark");
//   }
// });

// đã học đến phút 20 nay đầu hơi tê


