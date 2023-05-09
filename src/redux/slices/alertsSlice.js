import { createSlice } from '@reduxjs/toolkit'

const initialState = { alertsList: [] }

export const alertsSlice = createSlice({
  name: 'alertsList',
  initialState,
  reducers: {
    addCartAlert: (state, action) => {
      state.alertsList.push(action.payload)
    },
    deleteShownAlert: (state, action) => {
      state.alertsList = state.alertsList.filter(
        (alert) => alert.id !== action.payload
      )
    },
  },
})

export const { addCartAlert, deleteShownAlert } = alertsSlice.actions

export default alertsSlice.reducer
