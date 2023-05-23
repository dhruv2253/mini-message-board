var express = require('express');
var router = express.Router();
const Message = require('../models/message')
const messages = [
  
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  
  const newMessage = {
    text: req.body.messageText,
    user: req.body.name,
    added: new Date()
  }
  messages.push(newMessage)
  new Message(newMessage).save()
  console.log("Posted")
  res.redirect('/')
})



module.exports = router;
