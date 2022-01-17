import React from "react";
import axios from "axios";

const Pizzas = () => {

const [cat, setCat] = React.useState('');
const [tamPizzas, setTamPizzas] = React.useState([]);
const [sabores, setSabores] = React.useState([]);
const [cart, setCart] = React.useState([]);
const [nomeTamanhoEscolhido, setNomeTamanhoEscolhido] = React.useState('');
const [bordas, setBordas] = React.useState([]);
const [obs, setObs] = React.useState('');

// Pega os tamanhos de pizza
React.useEffect(() => {
    axios
    .get("https://fgdevon.tk/pizzas/1")
    .then((res) => {
        // Setar no setNomeTamanhoEscolhido o nome do tamanho de pizza
        setTamPizzas(res.data.product.tbl_tamanhos);
    })
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });
}, []);

// Pega as bordas
React.useEffect(() => {
    axios
    .get("https://fgdevon.tk/bordas/1")
    .then((res) => {
        setBordas(res.data.bordas);
    })
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });
}, []);

// Se mudar o tamanho, limpamos o cart e subtotal
React.useEffect(() => { 
    setCart([]);
    setCat('Pizza');
}, [sabores]);


// Carrega os dados dos sabores pelo id passado por parametro, tambem seta o nome do tamanho escolhido
const saboresPizzas = ({tamPizzaId, tamPizzaName}) => {
    setNomeTamanhoEscolhido(tamPizzaName);
    setSabores([]);
    async function getSabores() {
    const response = await axios.get(
        `https://fgdevon.tk/sabores/${tamPizzaId}`
    );
    setSabores(response.data.sabores);
    }
    getSabores();
};


// Mostra tamanhos de pizza
const mostraTamanhos = () => {
    return tamPizzas?.map((tamPizza) => (
        <li key={tamPizza.id}>
            <input 
            onClick={
            () => { saboresPizzas({tamPizzaId: tamPizza.id, tamPizzaName: tamPizza.name_width})} }
            type="radio" name="tamanho"
            value={tamPizza.id} /> <span><b>{tamPizza.name_width}</b></span>
            <p>{tamPizza.descricao}</p>
        </li>  
    ));
}

const handleCartBordas = (borda) => {
    // Pegar só o objeto no cart que contem o qtdBorda e se existir algum remove e atualiza
    const bordaCart = cart.find((bordaCart) => bordaCart.qtdBorda === 1);
        if(!bordaCart){
            setCart([...cart, {
                id: Math.random(),
                name: borda.name,
                price: borda.price,
                qtd:0,
                qtdBorda: 1
            }])
        }else{
        // Remove o objeto do cart com splice
        cart.splice(cart.indexOf(bordaCart), 1);
            setCart([...cart, {
                id: Math.random(),
                name: borda.name,
                price: borda.price,
                qtd:0,
                qtdBorda: 1
            }])       
        }
    return bordaCart;
}

console.log(cart);
// Acertar a parte de inserir bordas no cart, e não adicionar o nome 1/2
// Mostra bordas
const mostraBordas = () => {
    return bordas?.map((borda, index) => (
        <li key={index}>
            <input
            onClick={
                () => {handleCartBordas(borda)} 
            }
            type="radio" name="borda"
            value={borda.id} /> <span><b>{borda.name}</b> - <b>{borda.price === 0.00?<span>Grátis</span>:Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(borda.price)}</b></span>
        </li>
    ));
}

const handleRemoveQtd = ({id, price, qtdAtual}) => {
    // Remove do contador de item 1 unidade    
        if(qtdAtual > 0){
            qtdAtual = parseInt(qtdAtual) - 1;
            document.getElementById(`qtdAtual-${id}`).innerHTML = qtdAtual;

            // Busca no cart o item
            if(cart.findIndex(item => item.id === id) !== -1){
                // Busca o item no cart, pega a quantidade atual e atualiza com a nova quantidade
                cart.find(item => item.id === id).qtd = qtdAtual;
                // Busca o preco do item no cart, atualizao preço diminuindo menos 1 unidade 
                cart.find(item => item.id === id).price = parseInt(cart.find(item => item.id === id).price) - parseInt(price/2);
                //Se item qtd = 0, remove do cart
                if(cart.find(item => item.id === id).qtd === 0){
                    cart.splice(cart.findIndex(item => item.id === id), 1);
                }
                    setCart([...cart], cart);
            }
        }
}

const handleAddQtd = ({id, price, name, qtdAtual}) => {
    // Quantidade atual acumulada do item
    let somaQtdTotalItem = cart.reduce((acc, item) => {
        return acc + item.qtd;
    }, 0);

    if(somaQtdTotalItem < 2){
        // Adiciona 1 unidade ao contador de item
        qtdAtual = parseInt(qtdAtual) + 1;
        // Insere no no documento o contador de item atualizado
        document.getElementById(`qtdAtual-${id}`).innerHTML = qtdAtual;
        // Procura se o item ja existe no cart, se não existir, adiciona no cart
        if(cart.findIndex(item => item.id === id) === -1){
            cart.push({
                id: id,
                name: name,
                price: price/2,
                qtd: 1
            });
            setCart([...cart], cart);
        } // Se existir, atualiza somente a quantidade e o preço
        else{
            cart.find(item => item.id === id).qtd = parseInt(cart.find(item => item.id === id).qtd) + 1;
            cart.find(item => item.id === id).price = parseInt(cart.find(item => item.id === id).price) + parseInt(price/2);
            setCart([...cart], cart);
        }

    }else{
        alert("Você só pode escolher 2 sabores")
    }
}


// Mostra sabores de pizza
const mostraSabores = () => {
    return sabores.map((sabor, index)=>{
        return(
            <li key={index} >
                {/* Botão decrementar */}
                <span>
                    <button 
                        className="remove-cick"
                        onClick={() => {
                            let qtdAtual = parseInt(document.getElementById(`qtdAtual-${sabor.id}`).innerHTML);
                            handleRemoveQtd({id: sabor.id, price: sabor.price, qtdAtual: qtdAtual});
                        }}
                    >- </button>
                </span>
                <span style={{fontSize:'20px', padding:'0 10px 0 10px', color:'red', fontWeight:'bold'}} id={`qtdAtual-${sabor.id}`}> 0 </span>
                {/* Botão incrementar */}
                <span>
                    <button className="add-click"  
                        onClick={()=>{
                            let qtdAtual = parseInt(document.getElementById(`qtdAtual-${sabor.id}`).innerHTML);
                            handleAddQtd({id: sabor.id, price: sabor.price, name: sabor.name, qtdAtual: qtdAtual});
                        }}
                    > + </button>
                </span>
                <label> {sabor.name} - <b>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(sabor.price)}</b></label>
            </li>
        )
    });
}

// Mostra total
const mostraTotal = () => {
    let total = 0;
    cart.map((item) => {
        return total += parseInt(item.price);
    })
    const valorFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(total);
    return  valorFormatado;
}

const mostraCart = () => {
    return cart.map((item) => {
        // Se cart exisitir qtdBordas = 1
        if(item.qtdBorda === 1){
            return(
                <li key={item.id}>
                    {item.price === 0.00
                    ? <span>{item.name}</span>
                    : <span> Borda de {item.name} - <b>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(item.price)}</b></span>}
                </li>
            )
        }
        return(
            <li key={item.id}>
                <span>{item.qtd === 2
                ? <span>1</span>
                : <span>1/2</span>}</span> - <span>{item.name} - <b>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(item.price)}</b></span>
            </li>
        )
    })
}

const handleChangeObs = (e) => {
    setObs(e.target.value);
}

return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                        <div id="lista-width">
                            <h1>Tamanhos</h1>
                            <ul>
                                {mostraTamanhos()}
                            </ul>
                        </div>
                    </div>
                    <div className="card-body">
                        <div id="lista-width">
                            <h1>Bordas</h1>
                            <ul>
                                {mostraBordas()}
                            </ul>
                        </div>
                    </div>
                    <div className="card-body">
                        <h1>Sabores</h1>
                        <p style={{color:'red'}}>Escolha a quantidade de opções (Max. 2 Opções)</p>
                        <div id="lista-sabores">
                            <ul>
                                {mostraSabores()}
                            </ul>
                        </div>
                    </div>

                    <div className="card-body">
                        <h1>Observações</h1>
                        <div>
                            <textarea
                                name="observacoes"
                                id="observacoes"
                                cols="30"
                                rows="10"
                                onChange={handleChangeObs}
                            ></textarea>
                        </div>
                    </div>

                    <div className="card-body">
                        <h1>Subtotal</h1>
                            {nomeTamanhoEscolhido? <div><h3>{cat} {nomeTamanhoEscolhido}</h3></div> : <p>Selecione um tamanho</p>}
                        <ul>
                            {mostraCart()}
                        </ul>
                        <h4>Observações</h4>
                        <p>{obs}</p>
                        <div id="sub-total">
                            <h2><span style={{color:'red'}}>{mostraTotal()}</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Pizzas;