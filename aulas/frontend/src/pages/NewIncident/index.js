import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { FiArrowLeft } from "react-icons/fi";
import logoSvg from "../../assets/logo.svg";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoSvg} alt="Be the hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente apra encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft color="#E02041" size={16} />
            Voltar para home
          </Link>
        </section>

        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Decrição" />
          <input placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
