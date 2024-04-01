import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

//componente responsável pela renderização do header e do menu na tela
const Header: React.FC = () => {
    return (
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
    );
}

export default Header;
