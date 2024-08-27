import jwt from 'jsonwebtoken'

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, 'kathmandu', { expiresIn: '3d' })
}

export default generateRefreshToken
