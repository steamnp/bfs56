import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, 'kathmandu', { expiresIn: '1d' })
}

export default generateToken
