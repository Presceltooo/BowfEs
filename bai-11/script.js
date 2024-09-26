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

  const button = document.querySelector("#button");

  button.addEventListener("click", () => {
    // console.log(this); // trả ra this của window
    console.log(button); // vì vậy ta có thể thây bằng việc dùng luôn biến buttonthay vì this
  });

// 4. Module: giống tính chất đóng gói trong OOP (tái sử dụng code 1 cách hiệu quả)




