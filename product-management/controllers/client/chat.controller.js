// [GET] /chat
module.exports.index = (req, res) => {
  // Socket.IO
  _io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
  });
  // End Socket.IO

  res.render("client/pages/chat/index", {
    pageTitle: "Chat"
  });
};