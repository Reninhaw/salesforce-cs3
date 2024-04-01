import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Organograma.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Pagina do Organograma
const Organograma: React.FC = () => {
    return (
        <div>
            <Header/>
            <main>
                <h1>Nosso projeto Organograma!</h1>
                <div id="organograma">
                    <img src="img/orggrama.png" alt="Imagem do Organograma" />
                </div>
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

export default Organograma;
