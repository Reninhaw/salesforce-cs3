import React from 'react';
import '../styles/Footer.css';


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
