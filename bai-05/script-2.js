//05. 1 số hàm built-in

// alert("Xin chào các bạn");

// var result = prompt("Bạn đã trên 18 tuổi ch?");
// console.log(result);
// console.warn(result);
// console.error(result);



// setTimeout(function() {
//   console.log("đã đc 5 giây")
// }, 5000);
// chạy 1 lần duy nhất sau 1 khỏng thời gian

// var b = setInterval(function() {
//   console.log("đã đc 5 giây")
// }, 5000);
// // chạy lặp lại sau 1 khoảng thời gian
// // Mở rộng nếu muốn dư lại thì:
// setTimeout(function() {
//   clearInterval(b);
// }, 10000); // sau 10s thì dừng lại, gg là ra


//  06. Typeof

// var a = 10;
// var b = "Nội dung....";
// var c;
// var d = null;
// var e = true;

// console.log(typeof a); // number
// console.log(typeof b); // string
// console.log(typeof a+b); // string
// console.log(typeof c); // undefined
// console.log(typeof d); // object
// console.log(typeof e); // boolean
// console.log(typeof a == "number"); // true

// // 07. Làm việc với String
// var fullName = "Nguyễn Văn A";
// console.log(fullName.length);

// 7.2:indexOf(): Tìm vị trí đầu tiên của chuỗi trong 1 chuỗi, nếu k tìm đc thì trả về -1
// var myString = "Xin chào các bạn!. Tôi là Đỗ Duy Tùng!. Tôi đến từ Hải Phòng!";
// console.log(myString.indexOf("Tùng")); // 33
// console.log(myString.indexOf("Tôi")); // 19
// console.log(myString.indexOf("Khôi")); // -1
// console.log(myString.indexOf("Tôi", 20)); // 44, 20 là vị trí bắt đầu tìm kiếm tính từ trái sang phải

// 7.3. lastIndexOf(): Tìm vị trí cuối cùng của chuỗi trong 1 chuỗi, nếu k tìm đc thì trả về -1
// var myString = "Xin chào các bạn!. Tôi là Đỗ Duy Tùng!. Tôi đến từ Hải Phòng!";
// console.log(myString.lastIndexOf("Tùng")); // 33
// console.log(myString.lastIndexOf("Tôi")); // 40
// console.log(myString.lastIndexOf("Khôi")); // -1
// console.log(myString.lastIndexOf("Tôi", 20)); // 19, 20 là vị trí bắt đàu tìm kiếm tính từ trái qua phải, nhưng khi tìm kiếm thì tìm ngược lại


// 7.4. slice(): cắt 1 chuối và trả về chuỗi mới mà k làm thay đỏi chuỗi ban đầu
// var myString = "Xin chào các bạn!. Tôi là Đỗ Duy Tùng!. Tôi đến từ Hải Phòng!";
// console.log(myString.slice(9, 18)); // các bạn!. // cắt từ 9 đến 17
// console.log(myString.slice(0)); // cắt hết toàn bọ chuỗi
// console.log(myString.slice(0, 1)); //lấy ký tự đầu tiên của chuối
// console.log(myString.slice(-1)); // lấy ký tự cuối cùng của chuỗi
// console.log(myString); // chuỗi ban đầu vẫn được giữ nguyên'

// // 7.5. replace(): thay thế 1 chuỗi bằng 1 chuỗi mới, nhưng chỉ thay thế chuỗi đầu tiên mà nó tìm thấy
// var myString = "Xin chào các bạn!. Tôi là Đỗ Duy Tùng!. Tôi đến từ Hải Phòng!";
// console.log(myString.replace("Tùng", "Khôi")); // Xin chào các bạn!. Tôi là Đỗ Duy Khôi!. Tôi đến từ Hải Phòng!
// console.log(myString.replace(/Tôi/g, "Anh")); // Xin chào các bạn!. Anh là Đỗ Duy Tùng!. Tôi đến từ Hải Phòng!
// /Tôi/g: công nghệ regex trên gg: tìm ra tất cả các chuỗi có đặc điểm chung trong chuỗi ban đầu
// console.log(myString); // chuỗi ban đầu vẫn được giữ nguyên

// // 7.7. trim(): loại bỏ khoảng trắng ở đầu và cuối chuỗi, không ảnh hưởng đến giữa các ký tự
// var myString = "   Xin chào các bạn!. Tôi là Đỗ Duy Tùng!. Tôi đến từ Hải Phòng!   ";
// console.log(myString) //    Xin chào các bạn!. Tôi là Đỗ Duy Tùng!. Tôi đến từ Hải Phòng!
// console.log(myString.trim()); // Xin chào các bạn!. Tôi là Đỗ Duy Tùng!. Tôi đến từ Hải Phòng!

// 7.8. charAt(): tra về ký tự ở vị trí chỉ định trong chuỗi
// var myString = "Xin chào các bạn!. Tôi là Đỗ Duy Tùng!. Tôi đến từ Hải Phòng!";
// console.log(myString.charAt()); // X
// console.log(myString.charAt(0)); // X
// console.log(myString.charAt(1)); // i
// console.log(myString.charAt(myString.length - 1)); // Lấy vị trí cuối cùng của chuỗi


// 8. Làm việc với Number
// 8.1.isNaN(): kiểm tra xem giá trị có phải là NaN hay không
// var a = 10;
// var b = "Nội dung....";
// var result = a/b;
// console.log(result); // NaN: Not a Number
// console.log(isNaN(result)); // true


// // 8.2. toString(): chuyển 1 số thành 1 chuõio
// var a = 10;
// var b = a.toString();
// var c = (10).toString();
// console.log(a); // 10
// console.log(typeof(a)); // number
// console.log(b); // trả về chuỗi 10
// console.log(typeof(b)); // string
// console.log(c); // trả về chuỗi 10
// console.log(typeof(c)); // string

// // 8.3. toFixed(): làm tròn số thập phân
// var a = 12.23456789;
// console.log(a.toFixed(0)); // 12
// console.log(a.toFixed(2)); // 12.23

// 9. Làm việc với Array
// 9.1: soString(): chuyển 1 mảng thành 1 chuỗi, tự động thêm dấu phẩn giữa các phần tử
// var list = ["HTML", "CSS", "JS"];
// console.log(list.toString()); // HTML,CSS,JS

// // 9.2. join(): chuyển 1 mảng thành 1 chuỗi, nhưng có thể thay đổi ngăn cách bằng 1 dấu bất kỳ
// var list = ["HTML", "CSS", "JS"];
// console.log(list.join()); // HTML,CSS,JS
// console.log(list.join(" - ")); // HTML - CSS - JS

// 9.3. pop(): xóa phần tử cuối cùng của mảng và trả về phần tử đó
// var list = ["HTML", "CSS", "JS"];
// console.log(list.pop()); // JS
// console.log(list); // [ 'HTML', 'CSS' ]


// // 9.4. push(): thêm phần tử vào cuối mảng và trả về độ dài của mảng đó
// var list = ["HTML", "CSS", "JS"];
// console.log(list.push("React", "Java")); // 5
// console.log(list);

// 9.5. shift(): xóa phần tử đầu tiên của mảng và trả về phần tử đó
// var list = ["HTML", "CSS", "JS"];
// console.log(list.shift()); // HTML
// console.log(list);

// 9.6. unshift(): thêm 1 or nhiều phần tử vào đầu mảng và trả về độ dài của mảng đó
// var list = ["HTML", "CSS", "JS"];
// console.log(list.push("React", "Java")); // 5
// console.log(list);

// 9.7. splice(): Xóa or chèn phần tử  mới vào mảng
// var list = ["HTML", "CSS", "JS"];
// // vd1: thêm phần tử vào mảng
// console.log(list.splice(2, 0, "React", "Java")); // []
// console.log(list); // [ 'HTML', 'CSS', 'React', 'Java', 'JS' ]

// vd2: xóa phẩn tử của mảng
// var list = ["HTML", "CSS", "JS"];
// console.log(list.splice(1, 1)); // [ 'CSS' ]

// // vd3: xóa và chèn phần tử vào mảng
// var list = ["HTML", "CSS", "JS"];
// console.log(list.splice(2, 1, "React", "Java")); // [ 'CSS' ]
// console.log(list); // [ 'HTML', 'React', 'Java' ]


// 9.8. concat(): Dùng để nối 2 Array lại với nhau, những k làm thay đổi Array ban đầu
// var list1 = ["HTML", "CSS", "JS"];
// var list2 = ["React", "Java"];
// // var list3 = list1.concat(list2);
// console.log(list1.concat(list2)); // [ 'HTML', 'CSS', 'JS', 'React', 'Java' ]
// console.log(list1); // [ 'HTML', 'CSS', 'JS' ] 

// 9.9. Slice(): DÙng để cắt các phần tử, không làm ảnh hưởng đến mảng ban đầu, vị trí mặc định bắt đầu là 0 và vị trí cuối cùng mặc định là phần tử cuối cùng
var list = ["HTML", "CSS", "JS", "React", "Java"];
console.log(list.slice(3)); //  [ 'React', 'Java' ]
console.log(list.slice(1, 3)); // [ 'CSS', 'JS' ]
console.log(list.slice(-3, -1)); // [ 'JS', 'React' ], âm hay dương thì cũng hình dung là nguược lại
console.log(list); // [ 'HTML', 'CSS', 'JS', 'React', 'Java' ]


// Bài tập:

