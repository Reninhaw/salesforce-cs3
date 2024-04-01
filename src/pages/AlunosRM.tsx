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
            <Header/>

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

            <Footer/>
        </div>
    );
}

export default AlunosRM;
