import { createSlice } from '@reduxjs/toolkit'

const initialState = { alertsList: [] }

export const alertsSlice = createSlice({
  name: 'alertsList',
  initialState,
  reducers: {
    setAlertsList: (state, action) => {
      state.alertsList = action.payload
    },
    showCartAlert: (state, action) => {
      state.alertsList.push(action.payload)
    },
    isItemInCartChecker: (state, action) => {
      state.
    }
  },
})

export const { setAlertsList, showCartAlert } = alertsSlice.actions

export default alertsSlice.reducer
