import React from 'react';
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {

  const { logout } = useAuth()

  return (
    <div className="container w-100">
      <p>Dashboard</p>
      <button className="btn btn-danger" onClick={() => logout()}>Hola desloguearme</button>
    </div>
  )
}
