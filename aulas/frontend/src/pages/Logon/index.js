import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";
import logoSvg from "../../assets/logo.svg";
import heroesPng from "../../assets/heroes.png";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoSvg} alt="be the Hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Seu ID" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn color="#E02041" size={16} />
            não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesPng} alt="Heroes" />
    </div>
  );
}
