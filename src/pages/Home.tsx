import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import '../styles/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home: React.FC = () => {
    return (
        <div>
        <Header/>
        <main>
            <div className="container">
                <div className="conteudo">
                    <h1>Vendas Salesforce</h1>
                    <h2>Este é um Projeto</h2>
                    <p>A Salesforce oferece uma ampla gama de produtos e serviços para ajudar as empresas a gerenciar seus relacionamentos com clientes, otimizar operações de vendas, marketing e atendimento ao cliente. Alguns dos principais produtos e soluções oferecidos pela Salesforce incluem:</p>
                </div>
                <div className="card-container">
                <div className="card">
                    <img src={img1} alt="Imagem 1" />
                    <h2>Sales Cloud</h2>
                    <p>Esta solução é focada na automação de vendas, rastreamento de leads, gestão de oportunidades e melhoria da produtividade da equipe de vendas.</p>
                </div>
                <div className="card">
                    <img src={img2} alt="Imagem 2" />
                    <h2>Service Cloud</h2>
                    <p>O Service Cloud é projetado para melhorar a experiência do cliente pós-venda. Ele oferece ferramentas para gerenciar casos de atendimento ao cliente, central de atendimento, suporte por chat e redes sociais, entre outros recursos.</p>
                </div>
                </div>
            </div>
        </main>
        <Footer/>
        </div>
    );
}

export default Home;
