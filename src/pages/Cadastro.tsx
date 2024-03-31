import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cadastro.css';
import Header from '../components/Header';

const Cadastro: React.FC = () => {
    return (
        <div>
            <Header/>

            <main>
                <h1>Aqui será o projeto da Página de Cadastros</h1>
            </main>

            <footer>
                <div className="footer-content">
                    <p>© Oiii</p>
                    <ul>
                        <li><a href="#">Termos de Serviço</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Cadastro;
