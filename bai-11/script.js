// 1. scope: là phạm vi hoạt động của biến: toàn cục và cục bộ (khi báo trong hàm)
  // // toàn cục: biến được khai báo ngoài hàm
  // const a = 10;
  // function test() {
  //   console.log(a);
  // }
  // // cục bộ: biến được khai báo trong hàm
  // function test1() {
  //   const b = 20;
  //   console.log(b);
  // }
  // test();
  // console.log(b); // error

  // VD2: 
  // function test1() {
  //   var a = 10;
  //   function test2() {
  //     var b = 20;
  //     console.log(a);
  //   }
  //   test2();
  // }

  // test1();
  // test2(); // error: vi ban than ham test() dang o trong ham test1() nen khong the goi truc tiep

  // console.log(a); // error: vi a la bien cuc bo

// 2. hoisting: là sử dụng 1 biến, 1 hàm xong mới cần khai báo biếnn hàm đó. JS sẽ tự động đưa các khai báo biến lên đầu chương trình

//2.1. biến trong hoisting (var)
  // console.log(a); // undefined
  // var a = 10;

  // // chuyen cach viet khac:
  // var a;
  // console.log(a); // undefined
  // a = 10;
  // console.log(a); // 10
  // kết luận: Dù biến  var a có tính hoisting nhưng giá trị của nó vẫn là undefined chỉ là nó sẽ không báo lỗi

  //2.2. let va const trong hoisting (k co tinh hoisting)
  // console.log(b); // Cannot access 'b' before initialization => let khong co tinh hoisting vaf const cung vay
  // let b = 20;

  //2.3. function trong hoisting
  // Declaration function
    // test();
    // function test() {
    //   console.log('Hello');
    // }
    // kết luận: Declaration function có tinh hoisting

  // Expression function
    // test();
    // var test = function() {
    //   console.log('Hello');
    // }

    // bản chất hàm Expression function là:

    // var test;
    // test();
    // test = function() {
    //   console.log('Hello');
    // }

    // kết luận: Chính vì vậy mà Expression function không có tinh hoisting

  // Arrow function
    // test();

    // var test = () => {
    //   console.log('Hello');
    // };
    // kết luận: Arrow function không có tinh hoisting giống như Expression function


//3. Từ khóa this
  // sẽ trỏ về đối tượng mà nó đang thuộc về
  // lưu ý: đặt this ngoài cùng chương trình thì thisse trả về đối tượng windown
  // 3.1
    // console.log(this); // window
  // 3.2: 
  // const button = document.querySelector("#button");

  // button.addEventListener("click", function() {
  //   console.log(this); // button
  // });

  // 3.3: this trong object
  // var infoUser = {
  //   name: "Duy Tung",
  //   age: 21,
  //   email: "abcd@gmail.com",
  //   phone: "0123456789",
  //   showInfo: function() {
  //     console.log(this);
  //     console.log(this.phone);
  //   },
  //   getFullName: function() {
  //     console.log(this.name);
  //   },
  //   cccd : {
  //     name: "Do Duy Tung",
  //     getFullName: function() {
  //       console.log(this.name);
  //     }
  //   }
  // };

  // // infoUser.showInfo();
  // // infoUser.getFullName();
  // infoUser.cccd.getFullName();

  // 3.4. This trong Arrow function
  // Không tồn tại đối tượng this
  // nếu dùng thì nó trả ra this của window

  // const button = document.querySelector("#button");

  // button.addEventListener("click", () => {
  //   // console.log(this); // trả ra this của window
  //   console.log(button); // vì vậy ta có thể thây bằng việc dùng luôn biến buttonthay vì this
  // });

// 4. Module: giống tính chất đóng gói trong OOP (tái sử dụng code 1 cách hiệu quả)

// 5. JSON: là một định dạng dữ liệu được lưu dưới dạng chuỗi.
// chỉ cho phép kiểu dữ liệu cơ bản: number, boolen, string, array, object, null
// không cho phép: function, undefined, date, biến, ...
// Trường hợp: Giá trị của JSON là Object thì:
  // có các cặp key/value
  // key đặt trong dấu nháy kép
  // k có dấu phẩy ở cặp key/value cuối cùng

  // const objectJS = {
  //   name: "Duy Tung",
  //   age: 21,
  //   email: "abc@gmail.com",
  //   phone: "0123456789",
  // };

  // const objectJSON = `{
  //   "name": "Duy Tung",
  //   "age": 21,
  //   "email": "abc@gmail.com",
  //   "phone": "0123456789"
  // }
  // `;
  // // trong objectJSON thì k thể thêm hàm ở trong như objectJS

  // VD1: JSON có giá trị là Object
    // const objectJSON = `{
    // "name": "Duy Tung",
    // "age": 21,
    // "email": "abc@gmail.com",
    // "phone": "0123456789"
    // }
    // `;
    // console.log(typeof objectJSON); // string
    // console.log(objectJSON); // in ra chuỗi JSON

    // // Chuyển từ JSON sang JS
    // const objectJS = JSON.parse(objectJSON);
    // console.log(objectJS); // in ra object

    // // Chuyển từ JS sang JSON
    // const objectJSON2 = JSON.stringify(objectJS);
    // console.log(objectJSON2); // in ra chuỗi JSON
  
    // lí do lại có JSON: là string lên dễ gửi qua API, dễ lưu trữ, dễ truyền dữ liệu


  // VD2: JSON có giá trị là Number
    // var numberJSON = `10`;

    // console.log(numberJSON);

    // var numberJS = parseInt(numberJSON);
    // điểm yếu khi sử dụng parseInt là nếu chuỗi k phải số mà là `ádasf` thì khi ấy nó sẽ trả về NaN
    // vì vậy lên dùng JSON.parse

    // chuyen JSON qua JS
    // var numberJS = JSON.parse(numberJSON);
    // console.log(numberJS);
    // //

    // // chuyen JS qua JSON
    // const numberJSON2 = JSON.stringify(numberJS);
    // console.log(numberJSON2);

  // VD3: JSON có giá trị là String
    // const stringJSON = `"abc"`;

    // // chuyen JSON qua JS
    // var stringJS = JSON.parse(stringJSON);
    // console.log(stringJS);

    // // chuyen JS qua JSON
    // const stringJSON2 = JSON.stringify(stringJS);
    // console.log(stringJSON2);

  // VD4: JSON có giá trị là Boolean
    // const booleanJSON = `true`;

    // // chuyen JSON qua JS
    // var booleanJS = JSON.parse(booleanJSON);
    // console.log(booleanJS);
    
    // // chuyen JS qua JSON
    // const booleanJSON2 = JSON.stringify(booleanJS);
    // console.log(booleanJSON2);

  // VD5: JSON có giá trị là Array
    // cấu trúc của Array nếu quên
    // const arrayJSON = `[{
    //   "name": "Duy Tung",
    //   "age": 21,
    //   "phone": "0123456789"
    // },
    // {
    //   "name": "Do Duy Tung",
    //   "age": 21,
    //   "phone": "0123456788"
    // }
    // ]`;

    // // chuyen JSON qua JS
    // var arrayJS = JSON.parse(arrayJSON);
    // console.log(arrayJS);

    // // chuyen JS qua JSON
    // const arrayJSON2 = JSON.stringify(arrayJS);
    // console.log(arrayJSON2);


  // VD6: JSON có giá trị là Null
    const nullJSON = `null`;

    // chuyen JSON qua JS
    var nullJS = JSON.parse(nullJSON);
    console.log(nullJS);
    //

    // chuyen JS qua JSON
    const nullJSON2 = JSON.stringify(nullJS);
    console.log(nullJSON2);



