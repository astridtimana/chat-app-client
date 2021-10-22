import React from 'react'
import { useAuth } from "../context/AuthContext";

export const Searchbox = () => {
    const { logout } = useAuth()
    return (
        <div className="headind_srch">
            <div className="recent_heading mt-2">
                <h5>Recientes</h5>
            </div>
            <div className="srch_bar">
                <div className="stylish-input-group">
                <button className="btn btn-danger" onClick={() => logout()}>
                    Salir
                </button>

                </div>
            </div>
        </div>
    )
}