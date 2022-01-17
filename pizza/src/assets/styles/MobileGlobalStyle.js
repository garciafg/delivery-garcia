import { createGlobalStyle } from "styled-components";

const MobileGlobalStyle = createGlobalStyle`

/* Dispositivos extra pequenos (telefones, 600 px pra baixo) */
@media only screen and (max-width: 600px) {
    .content-itens-flex-column {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: #eeeeee;
        padding: 10px 10px 0 10px;
        border-radius: 10px;
        margin: 0 0 10px 0;
        width: auto;
    }

    .itens-flex-row {
        flex-direction: column;
        justify-content: center;
        margin: 0 auto 0 auto;
    }
    /* Bloco direito */
    .block-right {
        display: none;
    }
    /* Bloco esquerdo */
    .block-left {
        border-radius: 5px;
        width: 100%;
        margin: 0px 0 0 0;
    }
    .card-item { // Card para itens com ingredientes
        width: 88vw;
    }

    .row-flex-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 10px;
    }
    .logo{
        border: 4px solid #fff;
        width: 60px;
        border-radius: 10px;
        border: 2px solid #fff;
    }
    .nomeLoja {
        font-size: 16px;
        font-weight: bold;
        margin-top: 5px;
    }
    .endLoja{
        text-align: center;
        margin: 0px 0 5px 0;
        font-size: 12px;
    }
    .openClose span{
        padding: 3px 10px 3px 10px;
        font-size: 12px;
        border-radius: 5px;
        border: 1px solid #DBF9DD;
        font-weight: bold;
    }

    .price-and-more{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        width: 60vw;
    }
    .price-and-more i{
        margin: 0 0 0 70px;
    }

    .balao-cart-mobile{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        position: fixed;
        z-index: 1000;
        bottom: 0;
        right: 0;
        margin: 0 20px 10px 0;
        cursor: pointer;
    }
    .balao-cart-mobile .fa {
        opacity: 0.6;
    }
    .balao-cart-mobile i {
        width: 50px;
        position: relative;
        color: green;
    }

    .balao-cart-qtd{
        position: absolute;
        z-index: 1000;
        color: white;
        margin: 0 5px 0 0;
        background-color: red;
        padding: 2px 8px 2px 8px;
        border-radius: 30px;
    }
    // Create side left manu hamburguer
    .hamburguer-menu-show {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        z-index: 1000;
        top: 0;
        left: 0px;
        width: 250px;
        height: 200px;
        background-color: rgba(0, 0, 0, 0.9);
        transition: all 0.3s;
        color: white;
        border-bottom-right-radius: 15px;
        }
        .cart-mobile-header{
        background-color: #282A3A;
        padding: 30px 0px 30px 0px;
        border-bottom: 20px solid #494B5E;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .cart-mobile-body{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 20px 0px 0px 20px;
    }
    // hamburguer-menu ocultar na tela
    .hamburguer-menu-hide {
            position: fixed;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: fixed;
            z-index: 1000;
            top: 0;
            left: -200px;
            width: 200px;
            height: 200px;
            background-color: rgba(0, 0, 0, 0.9);
            transition: all 0.3s;
            color: white;
    }

    // Menu filtrar e info da loja
    .container-menu-header{
        display: flex;
        justify-content:space-between;
        align-items: center;
        flex-direction: row;
        flex-direction: row;
        background-color: #eeeeee;
        margin: 10px 0 10px 0;
        border-radius: 5px;
        padding: 5px 10px 5px 10px;
    }
        // Menu filtrar e info da loja fixed
        .container-menu-header-fixed{
        display: flex;
        position: fixed;
        top: 0;
        width: 94vw;
        align-items: center;
        flex-direction: row;
        background-color: #eeeeee;
        border-radius: 5px;
        padding: 5px 10px 5px 10px;
        transition: all 0.7s ease-in-out;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    }
    .margin-container-itens{
        margin: 90px 0 0 0;
    }
    .filter-categories{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 72%;
        margin: 0 0 0 2px;
    }
    .select-categories{
        padding: 10px 10px 10px 10px;
        width: 100%;
    }
    .info-loja-menu{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
    }
    .info-time-menu, .info-pay-menu {
        display: flex;
        align-items: center;
        margin: 3px 0 3px 20px;
    }
    .info-time-menu span, .info-pay-menu span{
        font-size: 12px;
        font-weight: bold;
        margin: 0 0 2px 2px;
        cursor: pointer;
    }
        // Tela rolar, fixa menu select categorias
        .margin-top-container-itens{
        
    }
    


}

/* Dispositivos pequenos (tablets retrato e telefones grandes, 600px e superior)  */
@media only screen and (min-width: 600px) {
        /* Bloco esquerdo */
        .block-left {
        border-radius: 5px;
        width: 66%;
        margin: 10px 0 0 0;
        padding: 0 10px 0 10px;
        background-color: #eeeeee;
    }
    /* Card dos itens na home*/
    .card-item { // Card para itens com ingredientes
        width: 29vw;
    }
    header{
        border-bottom: 20px solid blue;
    }

    .logo{
        border: 4px solid #fff;
        width: 60px;
        border-radius: 10px;
        border: 2px solid #fff;
    }
    .nomeLoja {
        font-size: 20px;
        font-weight: bold;
        margin-top: 5px;
    }
    .endLoja{
        text-align: center;
        margin: 0px 0 5px 0;
        font-size: 12px;
    }
    .openClose span{
        padding: 5px 20px 5px 20px;
        background-color: #17801F;
        font-size: 12px;
    }
    .balao-cart-mobile{
        display: none;
    }
    #hamburguer {
        display: none;
    }
    #cart-fixed{
        position: fixed;
        top: 0;
        width: 28.5vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* align-items: center; */
        padding: 0 0px 0 0px;
        background-color: white;
        border-radius: 7px;
    }
    // Menu filtrar e info da loja
        .container-menu-header{
        display: flex;
        justify-content:space-between;
        align-items: center;
        flex-direction: row;
        flex-direction: row;
        background-color: #ffffff;
        margin: 10px 0 10px 0;
        border-radius: 5px;
        padding: 5px 10px 5px 10px;
        border: 1px solid #BEC0CD;
    }
    .container-menu-header select {
        border: 1px solid #BEC0CD;
        padding: 15px 20px 15px 20px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 600;
        background-color: #E2E3E9;

    }
        // Menu filtrar e info da loja fixed
        .container-menu-header-fixed{
        display: flex;
        position: fixed;
        width: 60vw;
        top: 0;
        justify-content:flex-start;
        align-items: center;
        flex-direction: row;
        background-color: #eeeeee;
        border-radius: 5px;
        padding: 5px 10px 5px 10px;
        transition: all 0.7s ease-in-out;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    }
    .filter-categories{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 50%;
        margin: 0 0 0 10px;
    }
    .select-categories{
        padding: 10px 10px 10px 10px;
        width: 100%;
    }
    .info-loja-menu{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 80%;
        margin-left: 20px;
    }
    .info-time-menu, .info-pay-menu {
        display: flex;
        align-items: flex-start;
        margin: 3px 0 3px 0px;
    }
    .info-time-menu span, .info-pay-menu span{
        font-size: 12px;
        font-weight: bold;
        margin-left: 3px;
    }
    // Tela rolar, fixa menu select categorias
    .margin-top-container-itens{
        margin: 75px 0 0 0;
    }
    
}
/* Dispositivos médios (tablets paisagem, 768px e superior) */
@media only screen and (min-width: 768px) {

    .card-item { // Card para itens com ingredientes
        width: 30vw;
    }
    header{
        border-bottom: 20px solid red;
    }
    .logo {
        width: 90px;
        margin: 0 auto;
        border-radius: 10px;
        border: 4px solid #fff;
    }
    .nomeLoja {
        font-size: 25px;
        font-weight: bold;
        margin-top: 10px;
    }
    .endLoja{
        text-align: center;
        margin: 0px 0 5px 0;
        font-size: 12px;
    }
    .openClose span{
        display: block;
        width: 100%;
        text-align: center;
        padding: 5px 20px 5px 20px;
        background-color: #17801F;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        border: 2px solid #DBF9DD;
    }

    .price-and-more i{
        margin: 0 0 0 70px;
    }

    .info-loja-menu{
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin-left: 0px;
    }
    .info-time-menu, .info-pay-menu {
        margin: 3px 0 3px 5px;
    }
    .info-time-menu span, .info-pay-menu span{
        font-size: 11px;
        margin-left: 2px;
    }
    // Menu filtrar e info da loja fixed
    .container-menu-header-fixed{
        width: 61vw;
    }
    .block-left {
        margin: 10px 0 0 0;
    }
}
/* Dispositivos grandes (laptops / desktops, 992px e superior) */
@media only screen and (min-width: 992px) {
    .card-item { // Card para itens com ingredientes
        width: 300px;
    }
    header{
        border-bottom: 20px solid white;
    }

    .price-and-more i{
        margin: 0 0 0 120px;
    }
    .info-loja-menu{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        width: 68%;
        margin-left: 10px;
    }
    .info-time-menu, .info-pay-menu {
        display: flex;
        align-items: flex-start;
        margin: 3px 0 3px 5px;
    }
    .info-time-menu span, .info-pay-menu span{
        font-size: 13px;
        font-weight: bold;
        margin-left: 5px;
        width: 187px;
    }
        // Menu filtrar e info da loja fixed
        .container-menu-header-fixed{
        width: 600px;
    }
    .block-left{
        margin: 10px 0 0 0;
    }
    #cart-fixed{
        width: 282px;

    }

}
 `

 export default MobileGlobalStyle;