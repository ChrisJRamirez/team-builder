import React from "react"

export default function Team(props) {
  const {details} = props

  if (!details) {
    return <h3> Working on adding team members</h3>
  }

  return (
    <div classname="team-container">
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}