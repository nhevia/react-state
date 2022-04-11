import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Components/Counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})