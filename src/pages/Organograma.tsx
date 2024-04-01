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
            <Footer/>
        </div>
    );
}

export default Organograma;
