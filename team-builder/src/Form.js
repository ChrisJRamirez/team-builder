import React from "react";

export default function Form(props){
  const {values, update, submit} = props

  const onChange = evt => {
    const {name, value} = evt.target

    update(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault()

    submit()
  }

  return (
    <form classname="form-container" onSubmit={onSubmit}>
      <div classname="form-group inputs">
        <label>Name
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="type your name"
            maxLength="30"
          />
        </label>

        <label> Email
          <input
          type="text"
          name="email"
          onChange={onChange}
          value={values.email}
          placeholder="type your email"
          maxLength="50"
          />
        </label>

        <label>Role
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">--- Select Role ---</option>
            <option value="backend engineer">Backend Engineer</option>
            <option value="frontend engineer">Frontend Engineer</option>
            <option value="designer">Designer</option>
            <option value="project manager">Project Manager</option>
          </select>
        </label>

        <div classname="submit">
          <button disabled={!values.name || !values.email || !values.role}>Submit</button>
        </div>

      </div>
    </form>
  )

}