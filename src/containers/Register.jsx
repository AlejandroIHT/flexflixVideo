import React, { useState } from "react";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";
import Header from "../components/Header";

const Register = (props) => {
  const [form, setValue] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (e) => {
    setValue({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <React.Fragment>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              onChange={handleInput}
              className="input"
              type="text"
              placeholder="Nombre"
            />
            <input
              name="email"
              onChange={handleInput}
              className="input"
              type="text"
              placeholder="Correo"
            />
            <input
              name="password"
              onChange={handleInput}
              className="input"
              type="password"
              placeholder="Contraseña"
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
