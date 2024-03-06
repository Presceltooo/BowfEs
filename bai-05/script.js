
var button = document.querySelector("button");
button.onclick = function(){
  alert('Hello World!');
}

var cachDatTenBienA = 10;
var cachDatTenBienB = 20;
var cachDatTenBienC = "DoDuyTung"
var cachDatTenBienD = cachDatTenBienA + cachDatTenBienB; // nếu là số sẽ cộng
var cachDatTenBienE = cachDatTenBienC + cachDatTenBienA; // nếu là chuỗi sẽ nối chuối
// cách toán tử số khác tương tự các ngôn ngữ khác

console.log(cachDatTenBienD);
console.log(cachDatTenBienE);

var f = ++cachDatTenBienA; // tức cộng trước rồi mới gán
console.log(f);
var g = cachDatTenBienA++; // tức gán tức rồi mơi cộng
console.log(g);
console.log(cachDatTenBienA);
// Ví dụ
// 3.1 toán tứ số học
console.log("Ví dụ nà:");
// var a  = 10;
// var b = a++ - ++a + ++a;
// //    = 10  -  12 +  13 = 11
// console.log(b);
// tự tự thì a-- hay --a thì cung tương tự

//3.2: toán tử gán: += .....

// 3.3: toán tử so sánh
var c = 20;
var d = "20";
e = c == d; //true: so sanh ch nghiêm ngặt
f = c === d; //false: so sanh nghiêm ngăt: 2 đối tượng cần cùng kiểu dữ liệu
console.log(e);
console.log(f);
// tương tự != và !== cũng như vậy

// 3.4 toán tử logic
// && : - AND, trả về true khi toán hạng đều true
// || : -origin, trả về true khi có cả 2 toán hạng hoặc 1 trong 2 toán hạng true
// ! : -NOT: chuyển đổi giá trị giữa true và false

// 4. Kiểu dữ liệu nguyên thủy(Primitive Data)
// kiểu Number
var a = 10; // số nguyên
var b = 10.5; // số nguyên
var c = Infinity; // dương vô cùng
var d = -Infinity; // âm vô cùng
var e = 10/"a"; // NaN

// String: có 3 cách dùng '' "" ``
// ``: template string trong ES6

// kiểu Underfined: là kiểu dữ liệu khai báo ra 1 biến và không gán giá trị thì kết quả trả về là underfined
// var a;
// console.log(a);

// kiểu Null: là kiểu dữ liệu đặc biệt, chỉ bao gồm một giá trị là null(không biết giá trị, không có giá trị)
// var a = null;
// console.log(a);

// kiểu Symbol: là kiểu dữ liệu nguyên thủy để tạo ra các giá trị duy nhất (unique value) và bất biến (immutable)

// 4.2: Dữ liệu phức tạp (Complex Data)
// có 2 kiểu là Function và Object

// kiểu function
function tinhDienTichHTron(banKinh) {
  return 3.14*(banKinh**2);
}

r1 = 20;
var s1 = tinhDienTichHTron(r1
  );
console.log(s1);

// kiểu Object: là 1 tập hợp gốm các cặp key-value
// value có thể là bất kì kiểu dữ liệu nào
// có 2 loại Object và Array

// kiểu Object
var inforUser = {
  fullName: "Đỗ Duy Tùng",
  age: 20,
  phone: "0886466217"
};
console.log(inforUser);
console.log(inforUser.fullName);

// kiểu Array
var listUser = [
  "Len Van A",
  "Nguyen Thi B",
  "Tran Van C"
];
console.log(listUser);
console.log(listUser[1]);


