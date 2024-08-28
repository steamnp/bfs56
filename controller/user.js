import { User } from '../models/user.js'

export const createUser = async (req, res) => {
  const newUser = await User.create(req.body)
  res.json(newUser)
}

export const getAllUsers = async (req, res) => {
  const allUsers = await User.find()
  res.json(allUsers)
}
