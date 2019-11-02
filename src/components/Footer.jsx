import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
    <footer className="footer">
    <div className="footer_body">
    <div className="footer_content">
            <div className="footer__links">
                    <a href="/">Términos de uso</a>
                    <a href="/">Declaración de privacidad</a>
                    <a href="/">Centro de ayuda</a>
            </div>
            <div className="footer__infoDev">
                    <b>Desarrollado por:</b> Under Preassure <br />
                    v 1.0.0.0 
            </div>
    </div>
</div>
</footer>
);

export default Footer;