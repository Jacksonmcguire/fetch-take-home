import { IOptions, checkUser } from "../../utils"
import { useState } from "react"
import "./Form.css"
interface IFormProps {
  options?: IOptions
}

export const Form = ({options}:IFormProps) => {

  const [stateOptions, setStateOptions] = useState<JSX.Element[] | undefined>()

  const [occupationOptions, setOccupationOptions] = useState<JSX.Element[] | undefined>()

  const [user, setUser] = useState({name: '', email: '', password: '', passwordConfirm: '', state: '0', occupation: '0'})

  if (options && !stateOptions) {
    setOccupationOptions(options.occupations.map
      (job => <option key={job}>{job}</option>))
    setStateOptions(options.states.map
      (state => <option key={state.name} value={state.name}>{state.abbreviation}</option>))
  }

  const updateUser = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.name) {
      case "name":
        setUser({...user, name: e.target.value});
        break;
      case "email":
        setUser({...user, email: e.target.value});
        break;
      case "password":
        setUser({...user, password: e.target.value});
        break;
      case "passwordcheck":
        setUser({...user, passwordConfirm: e.target.value});
        break;
      case "occupation":
        setUser({...user, occupation: e.target.value});
        break;
      case "state":
        setUser({...user, state: e.target.value});
        break;

    }
  }

  const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    checkUser(user)
    if (checkUser(user)) {
        setUser({name: '', email: '', password: '', passwordConfirm: '', state: '0', occupation: '0'})
    }
  }

  return (
    <form>
      <article className="text-inputs">
        <input type="text" placeholder="Full Name" value={user.name} onChange={(e) => updateUser(e)} name="name" required/>
        <input type="email" name="email" value={user.email} onChange={(e) => updateUser(e)} placeholder="Email"/>
          <input type="password" name="password" value={user.password} onChange={(e) => updateUser(e)} placeholder="password"/>
          <input type="password" name="passwordcheck" value={user.passwordConfirm} onChange={(e) => updateUser(e)} placeholder="confirm password"/>
      </article>
      <select name="state" defaultValue="0" value={user.state} onChange={(e) => updateUser(e)} required>
        <option value="0" disabled>State</option>
        {stateOptions}
      </select>
      <button type="submit" onClick={(e) => submitForm(e)}>Submit</button>
      <select name="occupation" value={user.occupation} defaultValue="0" onChange={(e) => updateUser(e)} required>
        <option value="0" disabled>Occupation</option>
        {occupationOptions}
      </select>
    </form>
  )
}