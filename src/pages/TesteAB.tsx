import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TesteAB.css';

const TesteAB: React.FC = () => {
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
                            <li><Link to="/alunosrm">Alunos-RM</Link></li>
                            <li><Link to="/organograma">Organograma</Link></li>
                        </ul>
                    </div>
                </div>
            </header>

            <main>
                <h1>Aqui ficará o projeto dos nossos Testes A/B!</h1>
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

export default TesteAB;
