import {createGlobalStyle} from 'styled-components';
import bg from '../img/bg-home.jpg';
import bgTopo from '../img/bg-topo.jpg';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    body {
        color: #000000;
        font-family: 'Poppins', sans-serif;
        background-image: url(${bg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;

    }
    .overlay{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
    }
    .bg-red{
        background-color: #ff0000;
    }
    .bg-white{
        background-color: #ffffff;
    }
    .bg-sinza{
        background-color: #eeeeee;
    }
    .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 0 10px;
    }

    /* Topo do site */
    header{
        background-color: orange;
        color: #fff;
        padding: 10px;
        text-align: center;
        border-bottom: 20px solid #ffffff;
        background-image: url(${bgTopo});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .row-flex-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
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
    .info-loja-header{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        margin-left: 20px;
    }
    .nomeLoja {
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
    }
    .endLoja{
        text-align: center;
        margin: 0px 0 5px 0;
    }

    /* Menu header */
    /* .menu-header {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        margin: 10px 0 10px 0;
        background-color: #ffffff;
        border-radius: 7px;
    } */

    /* .menu-header li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
    } */
    /* .menu-header-link:link{
        color: #333333;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
    } */
    /* .menu-header-link:visited{
        color: #333333;
    }
    .menu-header-link:active{
        color: #333333;
    }
    .menu-header-link:hover{
        color: #333333;
        text-decoration: underline;
    } */

    /* Corpo do site */
    .row-flex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start
    }

    /* Bloco direito */
    .block-right {
        border-radius: 5px;
        color: #fff;
        width: 30%;
        height: auto;
        margin: 0 0 0 10px;
        
    }

    /* Content Cart fixed after scrol */
    .box-cesta{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    
    .box-cesta p{
        margin: 0 auto 0 auto;
        padding: 0 auto 0 auto;
    }
    .cart-content {
        position: relative;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 10px;
        
    }
    .tit-cesta{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0px auto 10px auto;
        color: #888888;
        background-color: #E2E3E9;
        width: 100%;
        padding: 15px 0 15px 0;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        border-bottom: 1px solid #AAAAAA;
        // Sombra
        box-shadow: 0px 0px 5px #AAAAAA;
    }
    .tit-cesta i{
        margin: 0 20px 0 10px;
    }

    /* Fixar a div cart após atigir o topo no scrol */
    #cart-relative {
        position: relative;
        top: 0;
        right: 0;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 0px 0 0px;
        /* align-items: center; */
        background-color: #ffffff;
        border-radius: 7px;
    }

    .card-text {
        color: #666666;
        margin: 0 0 10px 0;
    }
    .itens-flex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        width: auto;
        
    }
    /* Card dos itens na home*/
    .card-item { // Card para itens com ingredientes
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #eeeeee;
        color: #666666;
        margin: 0 0 5px 0px;

    } 
    .card-body-item {
        display: flex;
        flex-direction: row;
        justify-content:flex-start;
        width: 100%;
    }
    .img-item { // Se não tiver ingredientes
        width: 60px;
        align-items: center;
        padding: 0 auto 0 auto;
    }

    .img-item img {
        height: 60px;
        border-radius: 5px;
        border: 1px solid #eeeeee;
    }
    .textos-card-item{
        display: flex;
        flex-direction: column;
        margin: 0 0 0 10px;
        cursor: pointer;
    }
    .price-and-more{
        display: flex;
        flex-direction: row;
        
    }
    .price-and-more i{
        font-size: 25px;
        color: green;
        float: right;
    }
    .textos-card-item h5 {
        font-weight: 700;
        font-weight: bold;
        color: #000000;
        font-size: 16px;
    }
    .textos-card-item-desc p{
        font-size: 11px;
        color: #666666;
        line-height: 0.8rem;
        font-weight: bold;

    }
    .price-item {
        font-size: 16px;
        color: #000000;
        font-weight: bold;
    }
    // Modal detalhe itens
    .react-responsive-modal-modal {
        border-radius: 15px;
    }
    .card-detalhe-item{
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #eeeeee;
        color: #666666;
        margin: 0 0 5px 0px;
    }
    .card-body-detalhe-item{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
    .img-detalhe-item{
        width: auto;
        align-items: center;
        padding: 0 auto 0 auto;
        margin: 0 40px 0 0px;
    }
    .img-detalhe-item img{
        height: 100px;
        border-radius: 15px;
    }
    .price-qtd-detalhe-item{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin: 0 0 0 40px;
    }
    .qtd-detalhe{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .btn-add-cart{
        padding: 10px 30px 10px 30px;
        border-radius: 10px;
        border:0px;
        font-size: 18px;
        background-color: green;
        color: #fff;
        cursor: pointer;
    }
    .title-qtd{
        font-size: 18px;
        font-weight: bold;
        color: #000000;
        margin: 0 0 10px 0;
    }
    #qtd-item .qtd-menos{
        font-size: 25px;
        color: #666666;
        margin: 0 10px 0 0;
        cursor: pointer;
        background-color: red;
        border-radius: 90px;
        padding: 0px 11px 2px 11px;
        color: #fff;
        font-weight: bold;
        border: 0px;
    }
    #qtd-item .qtd-mais{
        font-size: 25px;
        color: #666666;
        margin: 0 0 0 10px;
        cursor: pointer;
        background-color: green;
        border-radius: 100px;
        padding: 0px 7px 0px 7px;
        color: #fff;
        font-weight: bold;
        border: 0px;
    }
    #qtd {
        font-size: 20px;
        font-weight: bold;
    }
    .price-detalhe-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 20px;
        color: #000000;
        font-weight: bold;
        margin: 10px 0 0 0;
    }
    // Formatação dos itens no carrinho
    .item-carrinho{
        color: #666666;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 90%;
        border-bottom: #666666 1px solid;
        padding: 10px 0 10px 0;
        margin: 0 8px 0 12px;
    }
    .item-carrinho-info{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
    }
    .item-carrinho-img{
        width: 30px;
        align-items: center;
        padding: 0 auto 0 auto;
        margin: 0 10px 0 0px;
    }

    .btn-remove-cart{
        font-size: 15px;
        color: #666666;
        margin: 0 0 0 10px;
        cursor: pointer;
        background-color: red;
        border-radius: 100px;
        padding: 0px 4px 0px 4px;
        color: #fff;
        font-weight: bold;
        border: 0px;
    }
    .total-in-cart{
        color: #000000;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin: 0 0 0 0;
    }
    .block-finish-cart{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin: 20px 0 0 0;
    }
    .btn-finish-cart{
        padding: 10px 30px 10px 30px;
        border-radius: 10px;
        border:0px;
        font-size: 18px;
        background-color: green;
        color: #fff;
        cursor: pointer;
        margin: 20px auto 20px auto;
    }
    .desc-itens-total-pay{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 10px 20px 10px;
        border-bottom: #666666 1px solid;
    }

    // Formulario registro ou login
    .register-todo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
        margin: 0 0 0 0;
    }

    .register-form-login {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        border-radius: 18px;
        box-shadow: 8px 8px 24px #ccc;
        width: 400px;
    }

    .fields-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 20px 20px 20px;
        width: 400px;
    }

    .steps-form{
        width: 400px;
        background-color: #cccccc;
        padding: 0;
        margin: 0;
        border-radius: 18px;
    }
    .steps-form .field {
        margin: 0 0 16px 0;
    }

    .steps-form .field input {
        border-radius: 4px;
        border: 1px solid #ccc;
        width: 380px;
        height: 48px;
        padding: 8px;
        font-size: 20px;
        border-radius: 15px;
    }

    .button {
    background: green;
    border: 0;
    padding: 8px;
    color: #fff;
    border-radius: 40px;
    width: 100%;
    padding: 16px;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
}
.loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
}
.progressive-ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 450px;
    padding: 0 10px 20px 10px;
}
.progressive-ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 5px 10px 5px 10px;
    margin: 0 10px 0 0;
    // Sombra bottom
    box-shadow: 0 2px 0 #999999;
    // arrendondar pontas da div
    border-radius: 0 20px 20px 0px;
}

.tit-step{
    font-size: 14px;
    font-weight: bold;
}
.step-green{
    color: green;
    font-weight: bold;
    color: #ffffff;
    background-color: green;
}
.step-dark{
    color: #ffffff;
    font-weight: bold;
    color: #000000;
    background-color: #cccccc;
}
    
`;
    