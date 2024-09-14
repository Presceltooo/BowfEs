// 2.1. lay element qua Id; tim dc thang nao la dung o do luon
// const h2_01 = document.getElementById("h2-01");
// console.log(h2_01);

// 2.2. lay element qua tagname ; va tra ve 1 mang cac object
// const listH2 = document.getElementsByTagName("h2");
// console.log(listH2);
// for (const h2 of listH2) {
//   console.log(h2);
// }

// 2.3. lay ra nhieu element qua class
// const listTitle = document.getElementsByClassName("title");
// console.log(listTitle);
// for (const title of listTitle) {
//   console.log(title);
// }

// 2.4. lay ra mot the HTML theo tron bo trong CSS
  // const title = document.querySelector(".title");
  // console.log(title);

  // const tagA = document.querySelector("#menu li a");
  // console.log(tagA);
  // dùng để lấy lẻ 1 phần tử
  // const tagA2 = document.querySelector
  // ("#menu li:nth-child(2) a");
  // console.log(tagA2);

// 2.5. querySelectorAll : Để lấy ra 1 thể HTML theo bộ trọn trong CSS. Kết quả trả về 1 mảng các Object

  // const listTagA = document.querySelectorAll("#menu li a");
  // console.log(listTagA);

  // const menu = document.getElementById("menu");
  // const listTagA = menu.getElementsByTagName("a");
  // console.log(listTagA);

// 3. DOM HTML
// 3.1. lấy ra nội dung
// const innerHTMLH2_01 = document.querySelector("#h2-01").innerHTML;
// const innerTextHTMLH2_01 = document.querySelector("#h2-01").innerText;
// console.log(innerHTMLH2_01);
// console.log(innerTextHTMLH2_01);

// // Nếu muốn thay đổi lại nd ấy
// document.querySelector("#h2-01").innerText = ("Test");


//3.2. Lấy ra thuộc tính của HTML
// const h2_03 = document.querySelector("#h2-03");
// const classh2_03 = h2_03.getAttribute("class");
// const idh2_03 = h2_03.getAttribute("id");
// const testh2_03 = h2_03.getAttribute("test");
// const idProducth2_03 = h2_03.getAttribute("idProduct");



// console.log(h2_03);
// console.log(classh2_03);
// console.log(idh2_03);
// console.log(testh2_03);
// console.log(idProducth2_03);

// Hoặc nếu bạn muốn lấy đổi lại cái thuộc tính thì dúng setAttribute

const h2_01 = document.querySelector("#h2-01");
h2_01.setAttribute("class", "test-02");

setTimeout(() => {
  ads1 = document.querySelector("#ads-01");
  ads1.setAttribute("class", "ads ads-display");
}, 4000);


