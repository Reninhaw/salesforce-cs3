import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Organograma.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img5 from '../assets/img5.png';

// Pagina do Organograma
const Organograma: React.FC = () => {
    return (
        <div>
            <Header/>
            <main>
                <h1>Nosso projeto Organograma!</h1>
                <div id="organograma">
                <img src={img5} alt="Imagem 1" />
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Organograma;
