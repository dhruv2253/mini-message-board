var express = require('express');
var router = express.Router();
const Message = require('../models/message')
const messages = [
  
];


/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await Message.find()
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', async (req, res) => {
  
  const newMessage = {
    text: req.body.messageText,
    user: req.body.name,
    added: new Date()
  }
  messages.push(newMessage)
  await new Message(newMessage).save()
  console.log("Posted")
  res.redirect('/')
})



module.exports = router;
