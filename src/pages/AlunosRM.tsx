import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AlunosRM.css';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

//Página com os dados dos autores do grupo

const AlunosRM: React.FC = () => {
    return (
        <div>
            <header>
                <h1>Salesforce</h1>
                <div id="cabecalho">
                    <div id="navigator">
                        <ul>
                            <li><Link to="/">Página Inicial</Link></li>
                            <li><Link to="/testeab">Testes A/B</Link></li>
                            <li><Link to="/cadastro">Cadastros</Link></li>
                            <li><Link to="/chatbot">Chatbot</Link></li>
                            <li><Link to="/rm">Alunos-RM</Link></li>
                            <li><Link to="/organograma">Organograma</Link></li>
                        </ul>
                    </div>
                </div>
            </header>

            <main>
                <div className="container">
                    <div className="conteudo">
                        <h1>Alunos RM</h1>
                        <h2>Este é um Projeto</h2>
                    </div>
                    <div className="card-container">
                        <div className="card">
                        <img src={img3} alt="Imagem 2" />
                            <h2>Clara de Fonte Almeida</h2>
                            <p>RM554321</p>
                        </div>
                        <div className="card">
                        <img src={img4} alt="Imagem 2" />
                            <h2>Nicolas Paiffer do Carmo</h2>
                            <p>RM554145</p>
                        </div>
                    </div>
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

export default AlunosRM;
