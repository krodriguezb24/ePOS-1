import React from "react";
import '../../assets/styles/components/Register.scss';

const Register = () => (
  <div className="register">
    <div className="register__container">
      <h2>Registro</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <input
          className="input"
          type="password"
          placeholder="Repetir contraseña"
        />
        <button className="button">Registrarme</button>
      </form>
      <a href="/">Iniciar sesión</a>
    </div>
  </div>
);

export default Register;
