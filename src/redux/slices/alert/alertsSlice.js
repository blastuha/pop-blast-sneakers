import { createSlice } from '@reduxjs/toolkit'

const initialState = { alertsList: [] }

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert: (state, action) => {
      state.alertsList.push(action.payload)
    },
    deleteShownAlert: (state, action) => {
      state.alertsList = state.alertsList.filter(
        (alert) => alert.id !== action.payload
      )
    },
  },
})

export const { addAlert, deleteShownAlert } = alertsSlice.actions

export default alertsSlice.reducer
