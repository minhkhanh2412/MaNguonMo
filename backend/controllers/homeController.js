const messageModel = require('../models/messageModel')

exports.hello = (req, res) => {
  const message = messageModel.getMessage()
  res.json({ message })
}
