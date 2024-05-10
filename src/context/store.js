import { configureStore } from '@reduxjs/toolkit'
import userSlick from './userSlick'
export const store = configureStore({
  reducer: {
    users:userSlick
  },
})