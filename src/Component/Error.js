import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOP's page doesn't exist</h1>
      <h2>{err.status + " " + err.statusText}</h2>
    </div>
  )
}

export default Error
