const Alert = (props) => {
  return <>
    <div className={`alert alert-${props.type}`} role="alert">
      {props.msg}
    </div>
  </>
}

export default Alert;