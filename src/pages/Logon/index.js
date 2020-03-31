import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

// import { Container } from './styles';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">

                <img src={logoImg} alt="Be The Hero"></img>

                <form action="">
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="heroes"></img>
        </div>
    );
}

