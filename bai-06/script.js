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

// var string = "hello";

// switch (string) {
//   case "hello":
//   case "hi":
//     console.log("Xin chào");
//     break;
//   case "bye":
//     console.log("Tạm biệt");
//     break;
//   default:
//     console.log("Không thỏa mãn");
//     break;
// }

// 3. vòng lặp for
// for(var i = 0; i < 10; i++) {
//   console.log(i);
// }

// for(var i = 9; i >= 0; i--) {
//   console.log(i);
// }

// for(var i = 0; i < 10; i+=2) {
//   console.log(i);
// }
// i+=2 lúc này i tăng thêm 2 đơn vị mỗi lần tăng
// tg tự như vaath ta cũng có i+=3 hay 4....
// tương tự như vậy với i-=2 hay 1 số khác tương tự

// for(var i = 0; i < 10; i++) {
//   for(var j = 0; j < 10; j++){
//     console.log(`hàng ${i} cột ${j}`);
//   }
// }

// 4. vòng lặp For in
// dùng để lấy key của object cũng có thể áp dụng trong array và string
// var infoUser = {
//   fullName: "Đỗ Duy Tùng",
//   email: "abcdef17042004@gmail.com",
//   phone: "0987654321"
// }

// for(key in infoUser) {
//   console.log(key);
//   console.log(infoUser[key]);
//   // not console.log(infoUser.key); bởi nếu dùng như vậy nó sẽ bị hiểu đó là kieu string chứ không phải là key của object
//   // ta hoàn toàn có thể thay thế jey bằng 1 biến khác
// }
// var key = "fullName";
// console.log(infoUser.fullName);
// console.log(infoUser.key);
// console.log(infoUser[key]); 
// // gth cho dong lenh trên như sau:
// console.log(infoUser["fullName"])


// 5. vòng lặp for of
// // dùng để lấy value của array và string, lưu ý không dùng được với object
// var list = ["HTML", "CSS", "JS", "ReactJS", "NodeJS"];

// // console.log(list);
// // console.log(list.length);

// for(var i = 0; i < list.length; i++) {
//   console.log(i);
//   console.log(list[i]);
// }
// // thay vì dài dòng như này ta hoàn toàn có thể thauy bằng cách sử dụng vòng lặp for of để lôi đc cách phần tử trong mảng hoặc string

// for(item of list) {
//   console.log(item);
// }
// ta hoàn toán có thể thay item bằng 1 biến khác
// vd khác với String
// var string = "Đỗ Duy Tùng";
// for(var i = 0; i < string.length; i++) {
//   console.log(i);
//   console.log(string[i]);
//   // console.log(string.charAt(i));
// }
// // thay thế bằng for of
// for(var char of string) {
//   console.log(char);
// }


// 6. vòng lặp while
// var i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// var list = ["HTML", "CSS", "JS", "ReactJS", "NodeJS"];
// var i = 0;
// while (i < list.length) {
//   console.log(list[i]);
//   i++;
// }

// 6.1. vòng lặp do while
// điều khác biệt là vòng lặp do while luôn thực hiện trc các câu lệch ít nhất 1 lần rồi mới quan tâm đến điều kiện
// var i = 20;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10); // 20

// 7 và 8. break và continue
// break dùng để dừng vòng lặp, continue dùng để bỏ qua 1 vòng lặp

// for(var i = 0; i < 10; i++) {
//   if(i === 5) {
//     break;
//   }
//   console.log(i);
// }

// for(var i = 0; i < 10; i++) {
//   if(i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// 9. các cash khai báo biến
//9.1. kiểu var: là 1 biến toàn cục phạm bi ảnh hướng có mặt trên toàn code
//  var a = 10;
//   if(a == 10) {
//     var b = 20;
//     console.log(b);
//   }
//   console.log(b);

// 9.2. kiểu let: là 1 biến cục bộ chỉ phạm bi ảnh hưởng trong 1 block code
var a = 10;
if(a == 10) {
  let b = 20;
  console.log(b);
}

if(true) {
  let b = 30;
  console.log(b);
}

console.log(b);
  



