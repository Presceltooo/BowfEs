const express = require('express')
// md để gọi thử viện express
const app = express()
const port = 3000

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
  res.send(`
    h1>Trang chủ</h1>
    <p> tôi là tùng </p>  
  `);
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