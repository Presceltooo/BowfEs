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
  // // bh lai muon dung ca 2 o day

  // tinhTong(10, 20, (number) => {
  //   kiemTraSoDuong(number);
  //   kiemTraSoChan(number);
  // })
  

  // Ví dụ 3:
  // const loginSuccess = () => {
  //   console.log("Đăng nhập thành công");
  // };

  // const checkLogin = (data, callback) => {
  //   const email = "abc@gmail.com";
  //   const password = "123456";

  //   if (data.email === email && data.password === password) {
  //     callback();
  //   } else {
  //     console.log("Đăng nhập thất bại");
  //   }
  // };

  // let data = {
  //   email: "abc@gmail.com",
  //   password: "123456"
  // };

  // checkLogin(data, loginSuccess);


  // 2. Promise
  // Promise để giải quyết vấn đề callback hell (tức nhiều hàm lồng vào nhau). bởi Promise có cách viết đơn giản và dễ nhìn.
  // luu y khi dung promise thi k can ";"
  // var a = 10;

  // const promise = new Promise((resolve, reject) => {
  //   if (a === undefined) {
  //     reject();
  //   } else {
  //     resolve(a);
  //   }
  // });

  // promise
  //   .then((data1) => {
  //     console.log("Thanh cong");
  //     console.log(data1);
  //     return data1;
  //   })
  //   .then((data1) => {
  //     const data2 = data1 + 10;
  //     console.log(data2);
  //     return data2;
  //   })
  //   .then((data2) => {
  //     const data3 = data2 * 20;
  //     console.log(data3);
  //   })
  //   .catch(() => {
  //     console.log("That bai");
  //   })
  //   .finally(() => {
  //     console.log("Luon chay vao day");
  //   })

  // Promise có 3 trạng thái:
  // day la vi do cho vi lay du lieu tu server
  // const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     // resolve(10);
  //     reject("Loi");

  //   }, 3000);
  // });

  // setTimeout(() => {
  //   console.log("Sau 1 giay: ", promise);
  // }, 1000);
  
  // setTimeout(() => {
  //   console.log("Sau 2 giay: ", promise);
  // }, 2000);
  
  // setTimeout(() => {
  //   console.log("Sau 3 giay: ", promise);
  // }, 3000);
  
  // Tu do ta thay: setTimeout no chay bat dong bo

  // 3. fetchAPI

  // fetchAPI la phuong thuc ma de fortend co the giao tiep voi backend de lay du lieu

  // dau tien ta can biet ban chat cua fetch chinh la 1 promise
  // fetch("https://dummyjson.com/products")
  //   .then(response => response.json())

  //   // ban chat ham o day la arrow function, nhung duoc viet tat: (response) => {return response.json()}, dấu "{}", return cũng như vậy hoàn toàn có thể bỏ đi / return để trả ra cái gì để thằng dau có thể dùng cái đó
  //   // neu chi co 1 đối số thì kh cần "()" và ở trong fetch có hàm .json() cũng giống như .parse: tác dụng cũng chỉ chuyển từ json sang JS.

  //   .then(data => {
  //     console.log(data.products);

  //   // ta thấy rằng bh có 1 arrray 30 phần tử, gio ta chi muon lay ten san pham thoi chang han thì ta se dung map

  //   const newArray = data.products.map((item) => {
  //     return `
  //       <div class="product-item">
  //       <img src="${item.thumbnail}" />
  //       <h2>
  //       ${item.title}
  //       </h2>
  //       <div>${item.price}$</div>
  //       </div>
  //     `;
  //     // cần dùng `` để viết html
  //   })
  //   console.log(newArray);

  //   // giờ ta muốn hiện thị ra dánh sách sản phẩm vs thẻ li
  //   // trước tiên ta can convert array sang string qua hàm join

  //   const htmls = newArray.join("");

  //   console.log(htmls);
  //   // rồi giờ hiện thị
  //   const productList = document.querySelector("#product-list");
  //   productList.innerHTML = htmls;


  //   })
    


  // 4. Async / Await
  // lí do để có Async/Await là vì hà bình thưởng nó hoạt động 1 cách bất động bộ, bên trong nó lại bất đồnh bộ nhưng thứ ta cần là đồng bộ để có thể làm việt một cách mạch lạc (như Promise vì nó có tính chờ qua .then)

  // để biến hàm thông thường thành hàm Promise thì ta sẽ dùng Async/ await

  const fetchApi = async (api) => {
    const response = await fetch(api);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
  };

// fetchApi("https://dummyjson.com/products")
//   .then((data) => {
//     console.log(data);
//   })


// 5. JSON server và Postman
// 5.1. JSON server: là 1 server để fake API và trả về chối JSON

fetchApi("http://localhost:3000/products")
  .then((data) => {
    console.log(data);
    const newArray = data.map((item) => {
      return `
        <div class="product-item">
        <img src="${item.thumbnail}" />
        <h2>
        ${item.title}
        </h2>
        <div>${item.price}$</div>
        </div>
      `;
    })
    console.log(newArray);

    const htmls = newArray.join("");

    console.log(htmls);

    const productList = document.querySelector("#product-list");
    productList.innerHTML = htmls;
    })

    // hướng dẫn:
    // 1. npm init: tạo ra 1 file package.json
    // 2. npm i json-server: cài đặt json-server
    // 3. data.json: tạo ra 1 file data.json
    // 4. ở mục script của file package.json thêm "start": "json-server --watch data.json"
    // 5. npm start: chạy server

  // 5.2. Postman: mục đích test API
  // PT GET: để lấy dữ liệu, cái mà BE dùng để test API
  // PT POST: để bảo bản ghi mới
  // PT PUT: để cập nhật bản ghi
  // nhược điểm của phương thức PUT phải nhập đầy đủ Key-Value, kể cái Key-Value k cần thay đổi (k nhập đủ sẽ dẫn đến mất data)
  // PT PATCH: để cập nhật 1 phần của bản ghi cũng giống vs PUT nhưng k cần nhập Key-Value của những cái không cần thay đổi.
  // PT DELETE: để xóa bản ghi


