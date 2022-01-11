import "./LoginMessage.css"
type LoginProps = {
  success: boolean | undefined
  removeMessage():void
}
/**
 * Modal that is displayed after a post request has been sent
 */
export const LoginMessage = ({success, removeMessage}: LoginProps) => {
  if (success !== undefined) return (<div className="login">
    <p onClick={removeMessage} className="close">ⓧ</p>
    {success && <p>Congatulations, you have succesfully created an account.</p>}
    {!success && <p>Something went wrong, please try again.</p>}
  </div>)
  else return null
}
