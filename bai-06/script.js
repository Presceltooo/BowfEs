// // 1.1 và 1.2
// var a = 10;
// var b = 20;

// if (a > b) {
//   console.log('a lớn hơn b');
// } else {
//   console.log('a nhỏ hơn hoặc bằng b');
// }

// 1.3
// var diemThi = 7;
// if (diemThi >= 8) {
//   console.log('Học sinh giỏi');
// } else if (diemThi >= 6.5) {
//   console.log('Học sinh khá');
// } else if (diemThi >= 5) {
//   console.log('Học sinh trung bình');
// } else {
//   console.log('Học sinh yếu');
// }

// var diemToan = 6.5;
// var diemTin  = 5.5;

// if(diemToan != null && diemTin != null) {
//   var diemTB = (diemToan + diemTin) / 2;
//   if (diemTB >= 8) {
//     console.log('Học sinh giỏi');
//   } else if (diemTB >= 6.5) {
//     console.log('Học sinh khá');
//   } else if (diemTB >= 5) {
//     console.log('Học sinh trung bình');
//   } else {
//     console.log('Học sinh yếu');
//   }
// } else {
//   console.log('Chưa có điểm Toán hoặc điểm Tin');
// }

// 1.4. Toán tử 3 ngôi
// var age = 16;
// var check = age > 18 ? "Đủ tuổi" : "Chưa đủ tuổi";
// console.log(check); // "Chưa đủ tuổi"
// dùng toán tử 3 ngôi cho những if else ngắn và đơn giản


// 2. Swich case
// điểm khác biệt giữa if else và swich case là if esle cho phép ta so sành nhiều điều kiện hơn thay vì chỉ là 1 giá trị nhất định của swich case

// var number = 5;

// switch (number) {
//   case 0:
//     console.log("Đây là số 0");
//     break;
//   case 1:
//     console.log("Đây là số 1");
//     break;
//   case 2:
//     console.log("Đây là số 2");
//     break;
//   default:
//     console.log("Đây không phải là số 0, 1, 2");
//     break;
// }
// // nếu bỏ break thì sẽ chạy tiếp sang case tiếp theo  chỉ khi gặp thì nó mới dừng lại


// switch (number) {
//   case 0:
//   case 1:
//     console.log("Đây là số 0 hoặc 1");
//     break;
//   case 2:
//     console.log("Đây là số 2");
//     break;
//   default:
//     console.log("Đây không phải là số 0, 1, 2");
//     break;
// }
// // có thể gọm nhiều case lại với nhau

var string = "hello";

switch (string) {
  case "hello":
  case "hi":
    console.log("Xin chào");
    break;
  case "bye":
    console.log("Tạm biệt");
    break;
  default:
    console.log("Không thỏa mãn");
    break;
}



