export const makeAlertObj = (alertsArr, text) => {
  return {
    id: alertsArr.length + 1,
    text: text,
  }
}
