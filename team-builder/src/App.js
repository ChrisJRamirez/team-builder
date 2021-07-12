import './App.css';
import React, { useState } from 'react';
import Form from './Form'
import Team from './Team'

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

const teamMembers = [
  {name: "Chris", email: "chris@chris.com", role: "Frontend Engineer"},
  {name: "Shariq", email: "shariq@shariqdagoat.com", role: "Project Manager"},
  {name: "Goat", email: "goat@goat.com", role: "Backend Engineer"},
]

function App() {
  const [newTeamMembers, setNewTeamMembers] = useState(teamMembers)

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
    
    setNewTeamMembers([...newTeamMembers,newTeamMem])
    setFormValues(initialFormValues)
      

  }


  return (
    <div className="container">
      <header className="container-header">
        <h1>Team Members</h1>
      </header>
        <Form
        value={formValues}
        update={updateForm}
        submit={submitForm}  
        />
        
         {

         }
     
    </div>
  );
}

export default App;
