import { Schema } from 'mongoose'
import { createModel } from '../middleware/mongoose.middle'

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  email: {
    type: String,
    required: true
  },

  role: {
    type: String,
    default: "user"
  }
})

export const User = createModel('User', userSchema)
