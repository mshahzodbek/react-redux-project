import { configureStore } from '@reduxjs/toolkit'
import AuhtReducer from '../slice/auth'

export const store = configureStore({
  reducer: {
    auth: AuhtReducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
})