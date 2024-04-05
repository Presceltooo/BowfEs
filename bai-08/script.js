// 1. Khái niệm về BOM (Browser Object Model)
// là các đối tượng liên quan đến trình duyệt.
// Dùng để truy vết lịch sử lượt web, lưu các hành động và trạng thái, thông tin của người dùng
// các loại BOM như: window, screen...
// 2.1 Khái niệm về window
// window là mootij đói tượng có những phương thức và thuộc tính được dunfh để xử lý trình duyệt.
// window có cấp độ cao nhất`
console.log(window);

// window.alert("Okay");
// alert("okay");

// const infoUser = {
//   name: "Đỗ Duy Tùng",
//   render: () => {
//     console.log("Ôkay");
//   } 
// };

// infoUser.render();
// 2.1. Khái niệm về BOM

// 2.2. innerHeight và innerWidth
// câu lệnh giúp ta lấy ra số liệu về chiều dài và chiều rộng của tài liêu; tài liệu chính là trang web mà ta đang xem
console.log(window.innerHeight);
console.log(window.innerWidth);

// 2.3. window.open()
// // mở ra một cửa sổ mới

// const openTab = () => {
//   window.open("https://www.youtube.com/", "_blank", "width=500, height=500, left=100, top=100");  
// };

// 2.4. window.close()
// đóng cửa sổ hiện tại

// var tab;
// const openTab = () => {
//   tab = window.open(
//     "https://www.youtube.com/", "_blank", 
//     "width=500, height=500, left=100, top=100");  
// };

// const closeTab = () => {
//   tab.close();
// };

// 3. BOM Screen
// screen.width/height: dùng để lất chiều rộng và chiều cao của màn hình máy tính mình đang sử dụng.

// console.log(screen.width);
// console.log(screen.height);

// 4.1. BOM Location
// location là một đối tượng để xử lý các vấn đề liên quan đến URL của trang web
// 4.1
console.log(location);

// 4.2 :reload lại trang
const reloadPage = () => {
  location.reload();
};

// setInterval(reloadPage, 3000);

// 4.3. các thông tính
console.log(location);

// 5.1. BOM History
// history để truy vết được lịch sử lướt web

console.log(history);

// 5.2. Truy vết lichsk sử lướt web
// history.length: đếm tổng số trang đã luuw trong history
// history.back(): dùng để trở lại trang trước
// history.forward(): đi tới trnag kế tiếp
// history.go(number): đi tới một trang yêu cầu
// nếu number âm thì tính từ trang hiện tại trừ đi number
// nếu number dương thì tính từ trang hiện tại cộng với number
// những câu lệnh trên như các nút của trang web

// const goBack = () => {
//   history.back();
// };


// 6.1. BOM Navigator
// navigator được dùng để lất các thông tin liên quan đến trình duyệt của người dùng

console.log(navigator);

// setInterval(() =>{
//   console.log(navigator.onLine);
// }, 1000);
// kiểm tra Internet của người dùng có bật chưa

// 7. BOM Popup
// là những câu lệnh như alert, confirm, prompt

// 8. BOM Timing
console.log(window);
// setTimeout
// setInterval

// 9. Cookies
// 9.1 Khái niệm
// Cookies là dữ liệu được lưu trữ trong môt file nằm trong máy tính
// Cookies đc lưu trữ ở dạng name = value
// Mục đích: giống với biến khác mà ta đc học nhưng nó sẽ tồn tại trong khoảng thời giam mà ta thiết lập

// const fullName = prompt("Nhập vào tên của bạn:");

// const fullName1 = "Đỗ Duy Tùng";
// console.log(fullName1);

// tạo Cookies
// document.cookie = `fullName=${fullName}`;


// Nhắc lại 1 chút về 1 số cách khai báo biến
// const fullName = "Đỗ Duy Tùng";
// const string = "Xin chào" + fullName;

// const string2 = `Xin chào` ${fullName};

// console.log(string);
// console.log(string2);

// cài thời gian cho cookies cơ bản
// document.cookie = `fullName1=${fullName1}; expires=Thu, 01 Jan 2025 00:00:00 UTC`;

// Hàm có sẵn thiết lập Cookies

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
// notes: cname là tên cookies, cvalue là giá trị có value, exdays là ngày hết hạn của cookies

// ví dụ:
// const fullName = prompt("Nhập vào tên của bạn:");
const fullName = "Đỗ Duy Tùng";
const email = "abcd123@gmail.com";
const phone = "0123456789";
console.log(fullName); 
setCookie("fullName", fullName, 3);
setCookie("email", email, 3);
setCookie("phone", phone, 3);

// lấy dữ liệu của cookie đang có
const cookie = document.cookie;
console.log(cookie);

// hàm có sẵn cắt chuỗi của string trong cookies thành array

function getCookie(cname) {
  var name = cname + "=" ;
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
    }
    return "";
}
const hoVaTen = getCookie("fullName");
console.log(fullName);

const mail = getCookie("email");
console.log(email);
const soDTh = getCookie("phone");
console.log(phone);

// cú pháp đổi giá trị cookies: gán trực tiếp giá trị khác cho cookies
// document.cookie =  "fullName = Đỗ Duy Tùng 1";

// cú pháp xóa cookies: thay đổi giá trị của cookies thành rỗng và thời gian hết hạn là thời gian trước đó
// document.cookie = "fullName=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

// hàm có sẵn để thực hiện thao tác xóa cookies
function deleteCookie(cname) {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}

// vi du:
deleteCookie("fullName");


