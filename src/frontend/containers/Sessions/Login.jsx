import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/Login.scss';
import GoogleLogo from '../../assets/static/GoogleLogo.png';
import TwitterLogo from '../../assets/static/TwitterLogo.png';

const Login = () => (
    <div className="login">
        <div className="login__container">
            <h2 tabIndex="1">Iniciar sesión</h2>
            <form className="login__container--form">
                <input aria-label="Correo" className="input" type="text" placeholder="Correo" />
                <input aria-label="Contraseña" className="input" type="password" placeholder="Contraseña" />  
            <button className="button">Iniciar Sesión</button>  
            <div className="login__container--remember-me">
                <label>
                    <input type="checkbox" name="" id="cbox1" value="checkbox" />Recuérdame
                </label>
                <a href="/">Olvidé mi contraseña</a>
            </div>
            </form>
            <div className="login__container--socialmedia">
                <div><a href=""><img src={GoogleLogo} alt="Google" />Inicia sesión con Google</a></div>
                <div><a href=""><img src={TwitterLogo} alt="Twitter" />Inicia sesión con Twitter</a></div>
            </div>
            <p className="login__container--register">¿Nuevo usuario? <Link to="/register">
            Regístrate
            </Link></p>
        </div>
    </div>
);

export default Login;