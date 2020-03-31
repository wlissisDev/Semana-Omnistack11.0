 
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './style.css';
// import { Container } from './styles';

import logoImg from '../../assets/logo.svg';


export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {
        e.preventDefault(); 

        const data = {
            name,
            email,
            whatsApp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data);

        alert(`Seu ID de acesso: ${response.data.id}`)
        }catch(err) {
            alert('Erro no cadastro, tente novamente.')
        }
    };


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        Voltar
                    </Link>
                </section>
                
                <form  onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="WhatsApp" 
                    value={whatsApp}
                    onChange={e => setWhatsApp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="Cidade" 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input 
                        placeholder="UF" 
                        style={{ width: 80 }} 
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}
