
import React  from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import imgFome  from '../../assets/img/imgfome.png';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import swal from 'sweetalert2';



const Home  = (props) => {

    const [empresa, setEmpresa] = React.useState([]);
    const [produtos, setProdutos] = React.useState([]);
    const slug = props.match.params.slug;
    const [divCart, setDivCat] = React.useState([]);
    const [categories, setCategories] = React.useState([]); // Nomes das categorias
    const [detalheItem, setDetalheItem] = React.useState([]); // Detalhes do item
    const [qtdItem, setQtdItem] = React.useState(1); // Quantidade do item
    const [itensCart, setItensCart] = React.useState([]); // Itens do carrinho

    // Modal
    const [open, setOpen] = React.useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () =>{
        setOpen(false)
        setQtdItem(1); // Fechar o modal, resetar para 1 a quantidade
    }
    // Modal finalizar compra
    const [openFinishModal, setOpenFinishModal] = React.useState(false);
    const onOpenFinishModal = () => setOpenFinishModal(true);
    const onCloseFinishModal = () =>setOpenFinishModal(false);

    // Passos dos steps
    const steps = [
        {
            id: "PERSONAL",
            icon: "fa fa-user-circle-o fa-2x",
            title: "Dados cliente"
        },
        {
            id: "SHIPPING",
            icon: "fa fa-map-marker fa-2x",
            title: "Endereço de entrega"
        },
        {
            id: "PAYMENT",
            icon: "fa fa-credit-card fa-2x",
            title: "Pagamento"
        }
      ];

    const [currentStep, setCurrentStep] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [formValues, setFormValues] = React.useState({
      name: "",
      email: "",
      phone: "",
      city: "",
      street: "",
      street_number: "",
      card_number: "",
      card_name: "",
      card_validity: ""
    });
  
    function handleNext() {
      setCurrentStep((prevState) => prevState + 1);
    }
  
    function handleInputChange(event) {
      const { name, value } = event.target;
  
      setFormValues((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
        
      // Valores do formulario da finalização da compra
      console.log("Form sent...", formValues);
  
      setLoading(true);

  const fakeApi = (cb, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, delay);
  });
      // simulate api antes de fechar o modal da compra
      await fakeApi(() => setLoading(false), 2000);

        // Apagar o itens LocalStorage e fechar a modal
        localStorage.removeItem('itens');
        setItensCart(JSON.parse(localStorage.getItem('itens')));// Seta exibição do carrinho
        setOpenFinishModal(false);

        // Modal de sucesso
        swal.fire({
            title: 'Compra realizada com sucesso!',
            text: 'Aguarde o retorno do pedido.',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }

    // Detectar pixeis de rolagem e travar a div cart
    const [tela, setTela] = React.useState(0);
    window.addEventListener("scroll", function (event) {
        setTela(this.scrollY);
    });
    React.useEffect(() => {
        if(tela < 160){
            // Equanto a tela não estiver acima do valor 160, a div cart não é fixada
            setDivCat('cart-relative');
            // Equanto a tela não estiver acima do valor 160px, a div container-menu-header não é fixada
            document.getElementById('menu-select-cat').classList.remove('container-menu-header-fixed');
            document.getElementById('menu-select-cat').classList.add('container-menu-header');
            // remover espaço top no container dos itens
            document.getElementById('block-left-id').classList.remove('margin-top-container-itens');
        }else{
            // Se chegar acima de 160, fixa a div cart
            setDivCat('cart-fixed');
            // Se chegar acima de 160, fixa a div container-menu-header
            document.getElementById('menu-select-cat').classList.remove('container-menu-header');
            document.getElementById('menu-select-cat').classList.add('container-menu-header-fixed');
            // adicionar espaço top no container dos itens
            document.getElementById('block-left-id').classList.add('margin-top-container-itens');
        }
    }, [tela]);

    // Pega dados da empresa
    React.useEffect(() => {
        async function getEmpresa() {
            const response = await axios.get('https://fgdevon.tk/delivery/'+slug);
            setEmpresa(response.data);
            getItemProduto(response.data.id);// Carrega lista de produtos pelo id da empresa
        }// se der erro, mostra mensagem de erro
        getEmpresa().catch(error => {
            console.log("Erro ao carregar os dados"+error);
        });
        getEmpresa();
    }, [slug]);
       

    function getItemProduto(idEmpresa){
        async function getProdutos() {
            const response = await  axios.get('https://fgdevon.tk/products/'+idEmpresa)
            setProdutos(response.data);
            setCategories(response.data);
        }
        getProdutos().catch(error => {
            console.log("Erro ao carregar os dados - "+error);
        });
        getProdutos();
    }

    // Filtrar por categoria
    function setFilterCat(id){
        // Pega os produtos da categoria selecionada pelo id
        if(id > parseInt(0)){ // Se valor for maior que zero
            async function getProdutos() {
                const response = await axios.get('https://fgdevon.tk/products-filter/'+id)
                setProdutos(response.data);
            }
            getProdutos().catch(error => {
                console.log("Erro ao carregar os dados - "+error);
            });
            getProdutos();

        }else{ // Se for \weo, traz todos os produtos
            getItemProduto(empresa.id);
        }
    }

    // Menu hamburguer mobile cart
    function abreHamburguer(){
        let status = document.getElementById('hamburguer').classList.toggle('hamburguer-menu-hide');
        if(status===true){
            document.getElementById('hamburguer').classList.remove('hamburguer-menu-show-hide');
            document.getElementById('hamburguer').classList.add('hamburguer-menu-show');
        }else{
            document.getElementById('hamburguer').classList.remove('hamburguer-menu-show');
            document.getElementById('hamburguer').classList.add('hamburguer-menu-show');
        }
    }

    // Carregar detalhe do item pelo id
    function handleAbreDetalheitem(id){
        async function getDetalheItem() {
            const response = await axios.get('https://fgdevon.tk/product-item/'+id)
            setDetalheItem(response.data);
            onOpenModal();
        }
        getDetalheItem().catch(error => {
            console.log("Erro ao carregar os dados - "+error);
        });
        getDetalheItem();
    }
    
    // Adicionar item ao carrinho no localStorage
    const handleAddItem = (name, price, img) => {
        let priceTotal = qtdItem * price;
        let item = {
            qtd: qtdItem,
            nameItem: name,
            img: img,
            priceTotal: priceTotal,
        }
        let itens = [];
        if(localStorage.getItem('itens') === null){
            itens.push(item);
            localStorage.setItem('itens', JSON.stringify(itens));
            setItensCart(JSON.parse(localStorage.getItem('itens')))// Seta itens para exibição do carrinho
        }else{
            itens = JSON.parse(localStorage.getItem('itens'));
            itens.push(item);
            localStorage.setItem('itens', JSON.stringify(itens));
            setItensCart(JSON.parse(localStorage.getItem('itens')))// Seta itens para exibição do carrinho
        }
        // Fecha o modal adicionar item ao carrinho
        setTimeout(() => {
            onCloseModal();
        }, 300);
    }

      // remover item do localStorage
        const removeItemCart = (index) => {
            let itens = JSON.parse(localStorage.getItem('itens'));
            itens.splice(index, 1);
            localStorage.setItem('itens', JSON.stringify(itens));
            setItensCart(JSON.parse(localStorage.getItem('itens')));// Seta exibição do carrinho
        }

    // Sempre que atualizar, carregar os dados no carrinho
    React.useEffect(() => {
        setItensCart(JSON.parse(localStorage.getItem('itens')));// Seta exibição do carrinho
    }, []);


    function exibeCartLocalStorage() {
        if(itensCart !== null && itensCart.length > 0){
            
            return itensCart.map((item, index )=> {
                return(
                    <div className="item-carrinho" key={index}>
                        
                        <div className="item-carrinho-img">
                            <img src={item.img} alt="" width="30"/>
                        </div>
                        <div className="item-carrinho-info">
                            <div className="dados-item-add-cart">
                                <div className="item-carrinho-info-qtd">
                                    <span><h4>{item.qtd}x - {item.nameItem}</h4></span>
                                </div>
                            </div>
                            <div className="item-carrinho-info-price">
                                <h5>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.priceTotal)}</h5>
                            </div>
                        </div>
                        <div className="btn-remove-item">
                            <button className="btn-remove-cart" onClick={() => removeItemCart(index)}>X</button>
                        </div>
                    </div>
                )
            }
            )
        }else{
            return(
                <div className="item-carrinho">
                    <p><img src={imgFome} alt="cesta" width="200" /></p>
                </div>
            )
        }
    }

    const viewItensFinishCart = ({itens, total}) => {
        return(
                <div className="register-todo">
                    <div className="register-header">
                        <div className="register-step">
                            <ul className="progressive-ul">
                                {steps.map((step, index) => (
                                    // Fica verde conforme pula etapas
                                    <li key={index} className={index <= currentStep ? 'step-green' : 'step-dark'}>
                                        <span className="step-number"><i class={step.icon} aria-hidden="true"></i></span>
                                        <p className="tit-step">{step.title}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="register-body">
                        <div className="register-form-login">
                            <form className="steps-form" onSubmit={handleSubmit}>
                                <div className="fields-container">
                                    {steps[currentStep].id === "PERSONAL" && (
                                        <div className="fields">
                                            <div className="field">
                                                <input
                                                type="text"
                                                placeholder="Nome completo"
                                                name="name"
                                                onChange={handleInputChange}
                                                value={formValues.name}
                                                />
                                            </div>
                                            <div className="field">
                                                <input
                                                type="text"
                                                placeholder="E-mail"
                                                name="email"
                                                onChange={handleInputChange}
                                                value={formValues.email}
                                                />
                                            </div>
                                            <div className="field">
                                                <input
                                                type="text"
                                                placeholder="Telefone"
                                                name="phone"
                                                onChange={handleInputChange}
                                                value={formValues.phone}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {steps[currentStep].id === "SHIPPING" && (
                                        <div className="fields">
                                            <div className="field">
                                                <input
                                                type="text"
                                                placeholder="Cidade"
                                                name="city"
                                                onChange={handleInputChange}
                                                value={formValues.city}
                                                />
                                            </div>
                                            <div className="field">
                                                <input
                                                type="text"
                                                placeholder="Rua"
                                                name="street"
                                                onChange={handleInputChange}
                                                value={formValues.street}
                                                />
                                            </div>
                                            <div className="field">
                                                <input
                                                type="text"
                                                placeholder="Número"
                                                name="street_number"
                                                onChange={handleInputChange}
                                                value={formValues.street_number}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {steps[currentStep].id === "PAYMENT" && (
                                        <div className="fields">
                                            <div className="field">
                                                <input
                                                type="text"
                                                placeholder="Número do cartão"
                                                name="card_number"
                                                onChange={handleInputChange}
                                                value={formValues.card_number}
                                                />
                                            </div>
                                            <div className="field">
                                                <input
                                                type="text"
                                                placeholder="Nome no cartão"
                                                name="card_name"
                                                onChange={handleInputChange}
                                                value={formValues.card_name}
                                                />
                                            </div>
                                            <div className="field">
                                                <input
                                                type="text"
                                                placeholder="Validade"
                                                name="card_validity"
                                                onChange={handleInputChange}
                                                value={formValues.card_validity}
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {currentStep < steps.length - 1 && (
                                        <button className="button next" type="button" onClick={handleNext}>
                                            Avançar
                                        </button>
                                    )}

                                    {currentStep === steps.length - 1 && (
                                        <button className="button submit" type="submit">
                                            Finalizar pedido
                                        </button>
                                    )}
                                    {loading && <h1 className="loader">Enviando...</h1>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>                
        )
    }
    
    // Somar total de itens no cart
    const somaTotalNoCart = () => {
        let total = 0;
        let itens = JSON.parse(localStorage.getItem('itens'));
        if(itens !== null && itens.length > 0){
            itens.map(item => {
              return  total += item.priceTotal;
            })
        }
        return <div className="total-in-cart">{
            total !== parseInt(0) 
            ? 
            <div className="block-finish-cart">
                <div className="desc-itens-total-pay">
                    <h4>Total do pedido: </h4>
                    <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</h3>
                </div>
                <button className="btn-finish-cart" onClick={() => onOpenFinishModal()}>Finalizar Compra</button>
                <Modal className="modal-detail-item" open={openFinishModal} onClose={onCloseFinishModal} center>
                    {viewItensFinishCart({itens, total})}
                </Modal>
            </div>
            : <></> 
        }</div>;
    }

const mostraCatProdutos = () => {
    return produtos.products?.map(produto => { 
        return (
            <div className="content-itens-flex-column" key={produto.id}>
                    <h2 className="card-text">{produto.name_product}</h2>
                    <div className="itens-flex-row">
                        {produto.tbl_products_itens?.map(item => {
                            // Exibe linhas de produtos que contem ingredientes
                            if(item.ingredientes){
                                return (
                                    <div key={item.id}>
                                    <div className="card-item">
                                        <div className="card-body-item">
                                            <span className="img-item">
                                                <img src={item.img} alt={item.name_product} />
                                            </span>
                                            <div onClick={() => handleAbreDetalheitem(item.id)} className="textos-card-item">
                                                <h5>{item.name_item}</h5>
                                                <div className="price-and-more">
                                                    <p className="price-item">{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(item.price)}</p>
                                                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                                </div>
                                                <div className="textos-card-item-desc">
                                                    {item.ingredientes ? <p>{item.ingredientes}</p> : <p>{item.tamanho}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }else{
                                // Não contém ingredientes
                                return (
                                    <div key={item.id}>
                                    <div className="card-item">
                                        <div className="card-body-item">
                                            <span className="img-item">
                                                <img src={item.img} alt={item.name_product} />
                                            </span>
                                            <div onClick={() => handleAbreDetalheitem(item.id)} className="textos-card-item">
                                                <h5>{item.name_item}</h5>
                                                <div className="price-and-more">
                                                    <p className="price-item">{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(item.price)}</p>
                                                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                                </div>
                                                <p className="textos-card-item-desc">
                                                    {item.ingredientes ? <span>{item.ingredientes}</span> : <span>{item.tamanho}</span>}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                )
                            }
                        })}
                    </div>
            </div>
        )
    })
}
    return(
        
        <>
            <main> 
                <div>
                </div>
                <div className="container">
                    <div className="row-flex-row">
                        <div id="block-left-id" className="block-left margin-top-container-itens">

                            {/* Cart mobile side left - Hamburguer*/}
                            <div id="hamburguer" className="hamburguer-menu-hide">
                                    <div className="cart-mobile-header">
                                        <p>Seus pedidos</p>
                                    </div>
                                    <div className="cart-mobile-body">
                                        Descrição dos itens
                                    </div>
                            </div>

                            <nav>
                                <div id="menu-select-cat" className="container-menu-header">

                                        {/* Criar input para filtrar categorias */}
                                        <div className="filter-categories">
                                            {/* Criar um select para filtrar categorias */}
                                            <select className="select-categories" onChange={(e) => setFilterCat(e.target.value)}>
                                                <option value={parseInt(0)}>Categorias</option>
                                                {categories.products?.map(category => {
                                                    return (
                                                        <option key={category.id} value={category.id}>{category.name_product}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                    <div className="info-loja-menu">
                                        <div className="info-time-menu">
                                            <i className="fa fa-clock-o" aria-hidden="true"></i> <span>Tempo para entrega</span>
                                        </div>
                                        <div className="info-pay-menu">
                                            <i className="fa fa-credit-card-alt" aria-hidden="true"></i> <span>Formas de pagamento</span>
                                        </div>
                                    </div>
                                </div>
                            </nav>

                            <div>
                                <Modal className="modal-detail-item" open={open} onClose={onCloseModal} center>
                                    {
                                        detalheItem.productItem?.map(item => {
                                            return (
                                                <div key={item.id}>
                                                    <div className="card-detalhe-item">
                                                        <div className="card-body-detalhe-item">
                                                            <span className="img-detalhe-item">
                                                                <img src={item.img} alt={item.name_product} />
                                                            </span>
                                                            <div className="textos-card-detalhe-item">
                                                                <div className="price-and-detalhe-more">
                                                                    <h3>{item.name_item}</h3>
                                                                    <p className="item-detail-desc">
                                                                        {item.ingredientes ? <span>{item.ingredientes}</span> : <span>{item.tamanho}</span>}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="price-qtd-detalhe-item">
                                                                <div className="qtd-detalhe">
                                                                    <p className="title-qtd">Quantidade</p>
                                                                    <p id="qtd-item">
                                                                        <button 
                                                                            className="qtd-menos"
                                                                            onClick={() => {
                                                                                if(qtdItem > 1){
                                                                                    setQtdItem(qtdItem - 1); 
                                                                                }else{
                                                                                    alert('Não é possível diminuir mais')
                                                                                }
                                                                            }}
                                                                        >-</button>
                                                                            <span id="qtd">{qtdItem}</span>
                                                                        <button 
                                                                            className="qtd-mais"
                                                                            onClick={() => {
                                                                                setQtdItem(qtdItem + 1);                                                                       
                                                                            }}
                                                                        >+</button>
                                                                    </p>
                                                                    
                                                                    <span className="price-detalhe-item">
                                                                        <p>Subtotal</p>
                                                                        <p id="price-item">{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(qtdItem * parseFloat(item.price))}</p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => {
                                                                handleAddItem(item.name_item, item.price, item.img)
                                                                setTimeout(() => {
                                                                    swal.fire({  
                                                                        icon: 'success',
                                                                        title: 'Adicionao ao carrinho com sucesso!',
                                                                        showConfirmButton: false,
                                                                        timer: 2000
                                                                    })
                                                                }, 500)
                                                            }} 
                                                            className="btn-add-cart">
                                                            Adicionar ao carrinho
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Modal>
                            </div>
                            
                            {/* Lista de produtos */}
                            {mostraCatProdutos()}
                        </div>
                        <div className="block-right">
                            {/* Mostra o cart */}
                            <div className="cart-content">
                                <div id={divCart}>
                                    <div className="box-cesta">
                                        <span className="tit-cesta"><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i><h4>Seu pedido</h4></span>
                                        { exibeCartLocalStorage()}
                                        {somaTotalNoCart()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </main>
            <footer>
                <div className="balao-cart-mobile" onClick={abreHamburguer}>
                    <span className="balao-cart-qtd">0</span>
                    <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
                </div>
            </footer>
        </>
    )
}

export default Home;