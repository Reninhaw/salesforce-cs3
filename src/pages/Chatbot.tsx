import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Chatbot.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pagina chatbot
const Chatbot: React.FC = () => {
    return (
        <div>
            <Header/>
            
            <main>
                <h1>Nosso Chatbot</h1>
                <div id="chatbot-container">
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Chatbot;
