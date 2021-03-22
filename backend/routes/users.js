const router = require('express').Router();
const User = require('../model/userModel');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const someOtherPlaintextPassword = 'not_bacon';

router.get('/register', (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/register', async (req, res) => {
  if (!req.body.name || !req.body.password) {
    return res.status(400).json({ msg: '모든 칸을 입력해주세요!' });
  }
  if (req.body.name.length > 15) {
    return res.status(400).json({ msg: '이름은 15자리를 넘길수 없습니다!' });
  }
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ msg: '이미 로그인된 아이디 입니다.' });
  }

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      // Store hash in your password DB.
      const newUser = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });

      newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json('Error: ' + err));
    });
  });
});

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.json('회원탈퇴가 완료되었습니다...'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/login', (req, res) => {});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  bcrypt.compare(req.body.password, user.password, function (err, response) {
    if (!response) {
      return res.status(400).send('Error' + err);
    } else {
      res.send('로그인에 성공하셨습니다!');
    }
  });
});

module.exports = router;
