import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import "./styles.css";
import logoSvg from "../../assets/logo.svg";
import heroesPng from "../../assets/heroes.png";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (err) {
      alert("Erro no login, tente novamente.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoSvg} alt="be the Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Seu ID"
          />
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
