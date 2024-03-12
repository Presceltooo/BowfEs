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
//  var tong = function() {
//   let tong = 0;
//   for (const item of arguments) {
//     tong += item;
//   }
//   return tong;
// }
// var ketQua = tong(5, 6, 7, 8, 9);
// console.log(ketQua);

// 1.2. Hàm Arrow function (Hàm mũi tên)
// hàm k có tính hoisting cũng k có agruments
//   var tong = (...arguments) => {
//     console.log(arguments);
//     let tong = 0;
//     for (const item of arguments) {
//       tong += item;
//     }
//     return tong;
//   }
//   // (...arguments) là rest parameter, nó sẽ chứa tất cả các tham số truyền vào hàm và đặc biệt là nó có sẵn

// var ketQua = tong(5, 6, 7, 8, 9);
// console.log(ketQua);

// setTimeout(() => console.log('Hello'), 1000);
// với những câu lệnh chỉ cần cần trả ra 1 dòng thì có thể dùng arrow function vì nó viết rất ngắn gọn

// vd1: tính tổng các số chắn của mảng
// const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var tongSoChan = (array) => {
//   let tong = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       tong += array[i];
//     }
//   }
//   return tong;
// };
// console.log(tongSoChan(mang));

// vd 2: tính biểu thức = 1/n + 2/n + 3/n + ... + n/n
// const tinhBieuThuc = (n) => {
//   let tong = 0;
//   for (let i = 1; i <= n; i++) {
//     tong += i / n;
//   }
//   return tong;
// };

// let n;
// do {
//   n = parseInt(prompt('Nhập n: '));// tra ra là string, nên cần đổi trang number
//   if (n <= 0) {
//     console.log('Nhập lại n');
//   } else {
//     console.log(n);
//     const result = tinhBieuThuc(n);
//     console.log(result);
//   }
// } while (n <= 0)

// 2. Try catch
// là khối lệnh dùng để bắt lõi chương trình, sử dụng khi k muốn chương trình dưng lại khi gặp lại lỗi nào đó
// const a = 10;

// try {
//   console.log("a = " + a);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Luôn chạy vào đây");
// }

// console.log("Có đọn code tại đây");
// lõi đã đc bỏ qua

// 3. Làm việc với Object nâng cao
// 3.1. thêm 1 key mới vào Object
// có 2 cách
// var infoUser = {
//   name: "Nguyễn Văn A",
// };
// console.log(infoUser); 

// infoUser.age = 20;
// infoUser['address'] = 'Hà Nội';
// // or const key = 'address';
// // infoUser[key] = 'Hà Nội';

// console.log(infoUser);

// // 3.2. Cách xóa 1 key khỏi Object
// delete infoUser.age;
// console.log(infoUser);


// 4. làm việc với Array nâng cao
// 4.1. forEach()
// để duyệt qua mỗi phần tử của mảng và thực hiện 1 nhiệm vụ nào đó
// với 3 biến số lần lượt là giá trị cảu index hiện tại, tại mỗi vòng lặp, index (chỉ số phẩn tự hiện tại đang đc xử lý), array (mảng đang đc xử lý)
const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// mang.forEach((item) => {
//   sum += item;
// });
// console.log(sum);

// mang.forEach((item, index) => {
//   mang[index] = item + 1;
// });
// // Sửa là sauwa chính trên mảng ban đầu k hề tạo ra mang mới
// console.log(mang);
// notes: luôn phải cosbieesn item ở trc hoặc so thể dùng "_" để thay thế

// mang.forEach = ((_, index) => {
//   console.log(index);
// });


// 4.2. every()
// kiểm tra các phần tử của mạng có thỏa mãn 1 điều kiện nào đó
// các tham số tham gia giống như forEach

const monHoc =[
  {
    ten: 'Toán',
    diem: 9
  },
  {
    ten: 'Lý',
    diem: 9
  },
  {
    ten: 'Hóa',
    diem : 7
  },
  {
    ten: 'Tin',
    diem: 6
  },
  {
    ten: 'Tin',
    diem: 9
  }
];

// const hocSinhGioi = monHoc.every((item) => item.diem >= 8);
// console.log(hocSinhGioi);

// if (hocSinhGioi === true) {
//   console.log('Học sinh giỏi');
// } else {
//   console.log('Học sinh k giỏi');
// }


// 4.3. hàm some()
// ngược lại với hàm every() thì hàm some() chỉ cần có 1 phần tử của mảng thỏa mãn điều kiện của mảng là đc
// cách tham số tham gia cũng tương tự như every()

// const oLaiLop = monHoc.some((item) => item.diem < 4);
// console.log(oLaiLop);

// if (oLaiLop === true) {
//   console.log('Ở lại lớp');
// } else {
//   console.log('Được lên lớp');
// }


// 4.4. hàm find()
// tìm xem trong mảng có phần tử nào giống với gái trị cần tìm không
// nếu có thì trả về chính phần tử đó, k thì undifined (chỉ tìm đc 1 phần tử đầu tiên thỏa mãn)
// các tham số tham gia tư tuong tự như every()

// const monTin = monHoc.find((item) => { return item.ten === 'Tin'});
// console.log(monTin);
// console.log(monTin.diem);


// const monSinh = monHoc.find((item) => { return item.ten === 'Sinh'});
// console.log(monSinh);

// 4.5 hàm filter()
// giống tương tự như hàm find() nhưng nso tìm đc nhiền phân tử hơn và về mảng các phần tử tìm đc

// const monTin = monHoc.filter((item) => { return item.ten === 'Tin'});
// console.log(monTin);
 
// 4.6 hàm map(): lặp qua từng phần tử của mảng và trả về 1 mảng mới (khác với foreach thì nó sẽ tạo thêm mảng mới)
// số lượng phần tử băng mảng cũ và giá trị trả về đc quyết định băng từ khóa return

// console.log(monHoc);
// const mangMoi = monHoc.map((item) => {
//   return item.ten;
// });
// console.log(mangMoi);

// // so sánh với foreach()
// console.log(monHoc);

// const test1 = monHoc.forEach((item) => {
//   return item.ten;
// });

// console.log(test1);
// do  k đc quyết định đc băng từ khó return nên kết quả trả ra là undifined

// 4.7. hàm reduce(): duyệt tau từng phần tử của mảng để thực hiện tính toán vầ trả về 1 gái trị cuối cùng
// cú pháp:
// Array.reduce((accumulator, currentValue, currentIndex, array) => {
//   //code trong này
// }, initialValue);
// bỏ sung thêm 2 tham số là biến để thực hiện tính toán, và giá trị khỏi tạo ban đầu cho biến đó, nếu k có thì giá trị khỏi tạo là phần tử đầu tiên của mảng

// const number = [1, 2, 3, 4, 5, 6];

// const sum = number.reduce((total, item) => {
//   console.log(total);
//   console.log(item);
//   console.log("-----");
//   return total + item;
// });
// console.log(sum); // 21

// console.log("----------------------- ");

// const sum1 = number.reduce((total, item) => {
//   return total + item;
// });
// console.log(sum1); // 21
// // tương tự với giá trị khở tạo là 5
// const sum2 = number.reduce((total, item) => {
//   return total + item;
// }, 5);
// console.log(sum2); //26 


// let tongDiem = 0;

// monHoc.forEach(item => {
//   tongDiem += item.diem;
// });
// console.log(tongDiem);

// tương tự thay vơi reduce()
let tongDiem = monHoc.reduce((tongDiem, item) => {
  return tongDiem + item.diem;
}, 0);

console.log(tongDiem);
let diemTrungBinh = monHoc. reduce((average, item) => {
  return average + item.diem/monHoc.length;
})
console.log(diemTrungBinh);

