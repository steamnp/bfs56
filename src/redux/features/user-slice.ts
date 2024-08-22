import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'Alex', age: 30 },
  reducers: {},
})

export default userSlice.reducer
