import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

// import { Container } from './styles';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem Vinda, APDA</span>

        <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
        <button type="button">♥</button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>

        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRÇIÃO</strong>
          <p>Descrição Teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>
          <button type="button">▬</button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRÇIÃO</strong>
          <p>Descrição Teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>
          <button type="button">▬</button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRÇIÃO</strong>
          <p>Descrição Teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>
          <button type="button">▬</button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRÇIÃO</strong>
          <p>Descrição Teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>
          <button type="button">▬</button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRÇIÃO</strong>
          <p>Descrição Teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>
          <button type="button">▬</button>
        </li>

      </ul>
    </div>
  );
}
