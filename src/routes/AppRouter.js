import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FormCarro from '../components/FormCarro';
import ListCarros from '../components/ListCarros';
import { Navbar } from '../components/Navbar';
import Bienvenida from '../components/Bienvenida';


export const AppRouter = () => {
    return (
        <div>
            <Router>
            <Navbar />
                <Routes>
                    <Route exact path="/Registro" element={<FormCarro/>}/>
                    <Route exact path="/Carros" element={<ListCarros/>}/>
                    <Route exact path="/" element={<Bienvenida/>}/>
                </Routes>
            </Router>
        </div>
    )
}
