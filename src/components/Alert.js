import React from 'react'

const Alert = (props) => {
  return (
    props.alert && <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
  )
}

export default Alert
