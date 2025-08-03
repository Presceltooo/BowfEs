module.exports.registerPost = (req, res, next) => {
  if (!req.body.fullName) {
    req.flash('error', 'Vui lòng nhập họ và tên!');
    res.redirect('back');
    return;
  }

  if (!req.body.email) {
    req.flash('error', 'Vui lòng nhập email!');
    res.redirect('back');
    return;
  }

  if (!req.body.password) {
    req.flash('error', 'Vui lòng nhập mật khẩu!');
    res.redirect('back');
    return;
  }

  next();
}

module.exports.loginPost = (req, res, next) => {
  if (!req.body.email) {
    req.flash('error', 'Vui lòng nhập email!');
    res.redirect('back');
    return;
  }

  if (!req.body.password) {
    req.flash('error', 'Vui lòng nhập mật khẩu!');
    res.redirect('back');
    return;
  }

  next();
}

module.exports.forgotPasswordPost = (req, res, next) => {
  if (!req.body.email) {
    req.flash('error', 'Vui lòng nhập email!');
    res.redirect('back');
    return;
  }

  next();
}

module.exports.otpPasswordPost = (req, res, next) => {
  if (!req.body.otp) {
    req.flash('error', 'Vui lòng nhập mã OTP!');
    res.redirect('back');
    return;
  }

  next();
}