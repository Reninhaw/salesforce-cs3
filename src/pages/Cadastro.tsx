import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cadastro.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Página Cadastro
const Cadastro: React.FC = () => {
    return (
        <div>
            <Header/>

            <main>
                <h1>Aqui será o projeto da Página de Cadastros</h1>
            </main>

            <Footer/>
        </div>
    );
}

export default Cadastro;
