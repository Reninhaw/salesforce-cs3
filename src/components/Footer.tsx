import React from 'react';
import '../styles/Footer.css';

//componente responsável pela renderização do footer na tela
const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>© Oiii</p>
                <ul>
                    <li><a href="#">Termos de Serviço</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
