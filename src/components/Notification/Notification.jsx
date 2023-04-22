import React from 'react'

// Type: success, alert, warning, info

function Notification({ content, type = 'info' }) {
  return <div className={`notification notification-${type}`}>{content}</div>
}

export default Notification
