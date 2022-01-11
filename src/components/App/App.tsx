import React, {useEffect, useState} from 'react';
import { Form } from '../Form/Form';
import logo from '../../assets/fetch.jpeg';
import { checkUser, getFormOptions, IUser } from '../../utils';
import { LoginMessage } from '../LoginMessage/LoginMessage'
import './App.css';

function App() {
  const [formOptions, setFormOptions] = useState()
  const [created, setCreated] = useState<undefined | boolean>()
  useEffect(() => {
    if (formOptions === undefined) {
      getFormOptions().then(data => setFormOptions(data))
    }
  })
/**
 *
 * Runs the checkUser Function which validates the user information and calls the method to post that new user
 * @returns a boolean which tells the form whether or not it should clear inputs
 */
  const submitUser = async (user: IUser) => {
    const success = await checkUser(user)
    if (success === 200) {
      setCreated(true)
      return true
    }
    else if (success === 400){
      setCreated(false)
      return true
    }
    else return false
  }

  const removeMessage = () => {
    setCreated(undefined)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="Fetch Logo" />
      </header>
      <main>
        <h1>Create Account</h1>
        <Form options={formOptions} submitUser={submitUser}></Form>
        <LoginMessage success={created} removeMessage={removeMessage}></LoginMessage>
      </main>
    </div>
  );
}

export default App;
