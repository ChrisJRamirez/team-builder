import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form'

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}


function App() {
  const [team, setTeam] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newTeamMem = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newTeamMem.name || !newTeamMem.email || !newTeamMem.role) {
      return
    }
  }

  return (
    <div className="container">
      <header className="container-header">
        <h1>Team Members</h1>

        <Form
        value={formValues}
        update={updateForm}
        submit={submitForm}  
        />
        
      </header>
    </div>
  );
}

export default App;
