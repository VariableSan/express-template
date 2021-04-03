const { Schema } = require('mongoose')
const { createModel } = require('../middleware/mongoose.middle')

const listSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  description: String,
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = createModel('List', listSchema)
