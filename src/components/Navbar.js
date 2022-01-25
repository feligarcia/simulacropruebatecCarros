import React from 'react';
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <Link className="link" to="">Inicio</Link>
                <Link className="link" to="/Registro">Registro</Link>
                <Link className="link" to="/Carros">Carros</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}


