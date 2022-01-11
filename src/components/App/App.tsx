import React, {useEffect, useState} from 'react';
import { Form } from '../Form/Form';
import logo from '../../assets/fetch.jpeg';
import { getFormOptions } from '../../utils';
import './App.css';

function App() {
  const [formOptions, setFormOptions] = useState()

  useEffect(() => {
    getFormOptions().then(data => setFormOptions(data))
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="Fetch Logo" />
      </header>
      <main>
        <Form options={formOptions}></Form>
      </main>
    </div>
  );
}

export default App;
