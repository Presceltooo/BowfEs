import { kiemTraSoDuong } from "./helpers/kiemTraSoDuong.js"; 
import { kiemTraSoChan } from "./helpers/kiemTraSoChan.js";
import { tinhTong } from "./helpers/tinhTong.js";


// 1. callback (gọi lại) là 1 hàm được truyển vào đối số của 1 hàm khác
// callback có thể được chạy sau khi các hàm khác kết thúc

  // Ví dụ 1:
  // const congViec1 = () => {
  //   console.log("Cong viec 1");
  // };

  // const congViec2 = (callback) => {
  //   console.log("Cong viec 2");
  //   callback();
  // };

  // congViec2(congViec1);

  // const congViec2 = (a, b, c, d) => {
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);

    // console.log("Cong viec 2");

  // };

  // congViec2("10", 10, {test: "abc"}, () => {console.log("test")});
  // từ đó cho thầy là có thể ép nhiều loại đối số vào trong 1 hàm


  // Ví dụ 2:

  // tinhTong(10, 20, kiemTraSoChan);
  // tinhTong(10, 20, kiemTraSoDuong);
  // bh lai muon dung ca 2 o day

  tinhTong(10, 20, (number) => {
    kiemTraSoDuong(number);
    kiemTraSoChan(number);
  })
  // đã xem đến phút 32



