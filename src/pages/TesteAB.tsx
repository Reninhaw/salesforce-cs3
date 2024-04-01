import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TesteAB.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pagina TesteAB
const TesteAB: React.FC = () => {
    return (
        <div>
            <Header/>

            <main>
                <h1>Aqui ficará o projeto dos nossos Testes A/B!</h1>
            </main>

            <Footer/>
        </div>
    );
}

export default TesteAB;
