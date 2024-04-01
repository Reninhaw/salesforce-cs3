import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Chatbot.css';
import Header from '../components/Header';

const Chatbot: React.FC = () => {
    return (
        <div>
            <Header/>
            
            <main>
                <h1>Nosso Chatbot</h1>
                <div id="chatbot-container">
                    <p>Este é um exemplo de componente de chatbot.</p>
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

export default Chatbot;
