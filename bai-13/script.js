// 1.1. localStorage là kho lưu trữ ở phía người dùng
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

// const currentMode = sessionStorage.getItem("mode");
// if (currentMode) {
//   const body = document.querySelector("body");
//   body.classList.toggle(currentMode);
//   //  toggle() dùng để thực hiện luân phiên giữa việc hiện & ẩn một phần tử.
// }

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

// const resetMode = document.querySelector("#reset-mode");
// resetMode.addEventListener("click", () => {
//   sessionStorage.removeItem("mode");
//   const body = document.querySelector("body");
//   body.classList.remove("dark");
// });

// const clearAll = document.querySelector("#clear-all");
// clearAll.addEventListener("click", () => {
//   sessionStorage.clear();
// });
// 2. So sánh localStorage, sessionStorage và cookies

// cookies
// thời gian hết hạn: khí tắt trình duyệt hoặc đặt thủ công
// dung lượng: 4kb => cần lưu nhưng thông tin nhở hoặc quan trọng
// thông tin lưu trữ: cả ở bên client side và sever side ( cả bên người dùng và bên server)

// localStorage
// thời gian hết hạn: vô thời hạn
// dung lượng: 5mb
// thông tin lưu trữ: chỉ ở bên client side

// sessionStorage
// thời gian hết hạn: khi tắt trinh duyệt
// dung lượng:10 mb
// thông tin lưu trữ: chỉ ở bên client side


// 3. closure(bao đóng): là 1 hàm được bao trong 1 hàm khác
// nó có thể sử dụng các biến toàn cục bộ, cục bộ của hàm cha và của chính nó (theo thứ tự từ trong ra ngoài, nếu cấc biến ấy là trùng nhau)
// let c = 30;
// const tinhToan = (a, b) => {

//   let c = 20;
//   const tinhTong = () => {
//     let c = 10;
//     return a + b + c;
//   }
//   return tinhTong;
//   // hoặc return tinhTong()
// }
// const tong = tinhToan(5, 10);
// console.log(tong);
// console.log(tong());
// // hoặc
// console.log(tinhToan(5, 10)())


// để closure ra nhiều hàm khác thì ta sử dụng object
// const tinhToan = (a, b) => {

//   const tinhTong = () => {
//     return a + b;
//   }

//   const tinhHieu = () => {
//     return a - b;
//   }

//   const tinhTich = () => {
//     return a * b;
//   }

//   const tinhThuong = () => {
//     return a / b;
//   }

//   return {
//     tong: tinhTong,
//     hieu: tinhHieu,
//     tich: tinhTich,
//     thuong: tinhThuong
//   };
//   // hoặc return tinhTong()
// }

// const tinh = tinhToan(5, 10);
// // console.log(tinh.tong);
// console.log(tinh.tong());
// // các phép tính khác cũng tương tự
// console.log(tinh.hieu());
// console.log(tinh.tich());
// console.log(tinh.thuong());

// 4. Default parameters: tham số mặc định
// là tham số đó sẽ lấy và sử dugnj giá trị mặc định nếu nó k đucợ truyền vào giá trị
// có 2 cách để thực hiện defualt paramenters

// cach 1: là gán mặc định tại vị trí khai báo
// const tinhToan = (a = 0, b = 0) => {
//   return a + b;
// };

// cach 2: là gán bên trong Function
// const tinhToan = (a, b) => {
//   a = a || 0;
//   b = b || 0;
//   return a + b;
// };


// // const tong = tinhToan(5, 10);
// const tong = tinhToan(); // 0
// console.log(tong);


// 5. spread syntax: cú pháp trải ra: để lặp lại các phần tử của mảng(array) hoặc các đổi tượng cảu object

// cú pháp ...name

// ví dụ với Array
// let listUserDB = ["Tung", "Huy", "Hieu"];
// const listUserFE = ["Tuan", "Tung", "Hieu"];

// listUserDB = [...listUserDB, ...listUserFE];
// console.log(listUserDB);

// ví dụ với Object
// const inforDB = {
//   name: "Tung",
//   age: 20,
//   address: "Hanoi"
// };
// const inforFE = {
//   email: "abc@gmail.com",
//   phone: "012934243"
// };

// const newInforDB = {
//   ...inforDB,
//   ...inforFE
// };

// console.log(newInforDB);


// 6. Rest parameters: tham số đại diện cho những tham số không được khai báo

// cú pháp ...name

// const tinhTong = (...numbers) => {
//   // console.log(numbers);
//   let tong = 0;
//   for (const number of numbers) {
//     tong += number;
    
//   }
//   return tong;
// };

// const ketQua = tinhTong(10, 20, 30, 40, 50, 60);
// console.log(ketQua);

// 7. Destructuring: phá vỡ cấu trúc để dễ lấy các phần tử của Array hoặc Object

// const time = [10, 24, 50];

// // const hour = time[0];
// // const minute = time[1];
// // const second = time[2];

// const [hour, minute, second] = time;

// console.log(hour);
// console.log(minute);
// console.log(second);

const inforUser = {
  name: "Tung",
  age: 20,
  address: "Hanoi"
};

const {name, age, address, test} = inforUser;

// thay cho const name = inforUser.name;...
// ton th gian

console.log(name);
console.log(age);
console.log(address);
console,log(test);



