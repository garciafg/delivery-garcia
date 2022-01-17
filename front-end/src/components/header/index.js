import React  from 'react';
import logo from '../../assets/img/logo.jpg';

const Header = () => {
    
    return (
        <>
        <header>
            <div className="container">
                <div className="row-flex-header">
                    {/* Logo */}
                        <a href="index.html">
                            <img 
                            src={logo} 
                            alt="Pizza logo"
                            className="logo" />
                        </a>
                        <div className="info-loja-header">
                            <p className="nomeLoja">Restaurante Garcia's Delivery</p>
                            <p className="endLoja">Rua 52, 412 - Parque Mambucaba - Angra dos Reis-RJ</p>
                        </div>
                        <div className="openClose">
                            <span>Aberto agora</span>
                        </div>
                </div>
            </div>
        </header>
        </>
    );
    }

export default Header;