const express = require('express')
// md để gọi thử viện express
const app = express()
// app có nghĩa là toàn bộ chương trình của ta
const port = 3000

app.set('views', './views'); // tim den thu muc views de render ra html
app.set('view engine', 'pug');
// để biết template engine là pug
// pug: để tách HTML thành các đoạn nhỏ , dễ tái sd

app.use(express.static('public'))
// nhúng file tĩnh ra ngoài để người dùng có thể truy cập


app.get('/', (req, res) => {
  // "/" mang như truy cập vào router, trang chủ

  // const listUser = [
  //   {
  //     fullName: "Nguyen Van A",
  //     email: "nguyenvana@gmail.com"
  //   },
  //   {
  //     fullName: "Nguyen Van B",
  //     email: "nguyenvanb@gmail.com"
  //   }
  // ];
  // console.log(listUser);
  // console.log("Okay");

// Template engine: là công cụ để tách các mã HTML từ đó có thể tái sử dụng các đoạn HTML đó.

  res.render('index.pug', {
    title: "Trang chủ",
    message: "Xin chào mọi người"
    // ngoài việc có những câu lệnh ở .pug thì ta có thể thêm 1 số nhưng data động ngay tại đây
  }) // do da co chieu vao thu muc views nen k can ghi can than chi dan
});

// MPA: mutiple Page Application: là load lại toàn bộ trang hay sever sẽ render lại toàn bộ trang (html)xg mới gửi cho SPA => tốn nhiều thời gian
// SPA: Single Page Application: là chỉ load 1 phần của của trang, sử dụng qua API => giảm tốc độ 


app.get('/products', (req, res) => {
  res.send("<h1>Trang sản phẩm</h1>");
});

app.get('/blog', (req, res) => {
  res.send("<h1>Trang blog</h1>");
});

app.get('/contact', (req, res) => {
  res.send("<h1>Trang liên hệ</h1>");
});

app.listen(port, () => {
  /// như thông báo khi chạy server
  console.log(`Example app listening on port ${port} - http://localhost:3000/`)
});





