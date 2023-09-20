class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }
    Salvar() {
        let produto = this.lerDados();

        if(this.validaCampo(produto)){
            this.adicionar(produto)
        }
        this.listaTabela();
    }
    
    listaTabela(){
        let tbody = document.getElementById(`tbody`);
        tbody.innerText = ``;

        for(let i = 0; i < this.arrayProdutos.length; i++ ) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_quantidade.innerText = this.arrayProdutos[i].quantidade;
            td_valor.innerText = this.arrayProdutos[i].preco;

        }

    }

    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;

    }


    lerDados(){
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById(`produtos`).value;
        produto.preco = document.getElementById(`preco`).value;
        produto.quantidade = document.getElementById(`quantidade`).value;


        return produto;

    }

    validaCampo(produto){
        let msg = ``;
        
        
        if(produto.nomeProduto == ``){
            msg +=`-informe o nome do produto \n`;
        }

        if(produto.preco == ``){
            msg +=`-informe o preco do produto \n`;
        }
        if(produto.quantidade == ``){
            msg +=`-informe a quantidade do produto \n`;
        }
        if(msg != ``){
            alert(msg);
            return false
        }
          
        return true;
    }

    Cancelar(){

    }
}

var produto = new Produto();