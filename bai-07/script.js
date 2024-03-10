// 1.1. Function
// function tong(a, b) {
//   return a + b;
// }
// var ketQua = tong(5, 6);
// console.log(ketQua);
// tuy nhiên đây mới chỉ là cộng đc 2 phần tử, nhưng nhu cầu mình là nhiều phần tử

//1.2. Declaration Function (Hàm định nghĩa)
// có tính hoisting, đc gọi hàm trc khai báo hàm đó
// có đồi tượng arguments
// function tong() {
//   // console.log(arguments); đối tượng arguments là 1 đối tượng đặc biệt trong js, nó chứa tất cả các tham số truyền vào hàm và đặc biệt là nó có sẵn
//   let tong = 0;
//   for (const item of arguments) {
//     tong += item;
//   }
//   return tong;
// }
// var ketQua = tong(5, 6, 7, 8, 9);
// console.log(ketQua);

// Expression Function (Hàm biểu thức)
// k có tính hoisting, nên k thể gọi hàm trc khai báo hàm đó
// cũng có đối tượng arguments
 var tong = function() {
  let tong = 0;
  for (const item of arguments) {
    tong += item;
  }
  return tong;
}
var ketQua = tong(5, 6, 7, 8, 9);
console.log(ketQua);


