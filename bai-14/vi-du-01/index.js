const express = require('express')
// md để gọi thử viện express
const app = express()
const port = 3000

app.set('views', './views'); // tim den thu muc views de render ra html
app.set('view engine', 'pug');

app.use(express.static('public'))


app.get('/', (req, res) => {
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
  res.render('index.pug', {
    title: "Trang chủ",
    message: "Xin chào mọi người"
    // ngoài việc có những câu lệnh ở .pug thì ta có thể thêm 1 số nhưng data động ngay tại đây
  }) // do da co chieu vao thu muc views nen k can ghi can than chi dan
});

app.get('/products', (req, res) => {
  res.send("<h1>Trang sản phẩm</h1>");
});

app.get('/blog', (req, res) => {
  res.send("<h1>Trang blog</h1>");
});

app.get('/contacts', (req, res) => {
  res.send("<h1>Trang liên hệ</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});