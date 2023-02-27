var regioesBrasil = [["Norte", "AM"], ["Norte", "RR"], ["Norte", "AP"], ["Norte", "PA"], ["Norte", "TO"], ["Norte", "RO"], ["Norte", "AC"], ["Nordeste", "MA"], ["Nordeste", "PI"], ["Nordeste", "CE"], ["Nordeste", "RN"], ["Nordeste", "PE"], ["Nordeste", "PB"], ["Nordeste", "SE"], ["Nordeste", "AL"], ["Nordeste", "BA"], ["Centro-Oeste", "MT"], ["Centro-Oeste", "MS"], ["Centro-Oeste", "GO"], ["Sudeste", "SP"], ["Sudeste", "RJ"], ["Sudeste", "ES"], ["Sudeste", "MG"], ["Sul", "PR"], ["Sul", "RS"], ["Sul", "SC"]]



function arredondar(n) {
    return (Math.round(n * 100) / 100).toFixed(2);
}

//Metodo fetch() Dollar
function converte(valorEmDolar){
    fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`).then(response=>{
        return response.json()
    }).then(economia => {
        document.getElementById("titulo-preco").innerHTML += " - R$"+arredondar(economia.USDBRL.bid*valorEmDolar);
        console.log("converteu")
    })
}

function avaliacao(nEstrelas){
    if(nEstrelas>5){
        nEstrelas=5
    }
    if(nEstrelas<0){
        nEstrelas=0
    }
    var totalEstrelas = 5
    var totalEstrelasOcupadas = 0;
    
    if(nEstrelas%2 == 0 || nEstrelas%2 == 1){
        for(a=0; a<nEstrelas; a++){
            document.getElementById("alinhar-estrelas").innerHTML += "<img class=estrela src='../imagens/estrelaCheia.png' width='8%'>"
            totalEstrelasOcupadas = nEstrelas;
        }
    }else{
        console.log(nEstrelas%2)
        if(nEstrelas%2 > 1){
            var nEstrelasCheias = nEstrelas - nEstrelas%2+1
        }
        if(nEstrelas%2 < 1){
            var nEstrelasCheias = nEstrelas - nEstrelas%2
        }
        for(a=0; a<nEstrelasCheias; a++){
            document.getElementById("alinhar-estrelas").innerHTML += "<img class=estrela src='../imagens/estrelaCheia.png' width='8%'>"
        }
        document.getElementById("alinhar-estrelas").innerHTML += "<img class=estrela src='../imagens/meiaEstrela.png' width='8%'>"
        totalEstrelasOcupadas = nEstrelasCheias +1;
    }
    for(c=0; c<totalEstrelas-totalEstrelasOcupadas; c++){
        document.getElementById("alinhar-estrelas").innerHTML += "<img class=estrela src='../imagens/estrelaVazia.png' width='8%'>"
    }

    if(nEstrelas >=4){
        document.getElementById("titulo-avaliacao").innerHTML="Esse produto foi bem avaliado"
    }
}

function dados(){
//Metodo fetch() para buscar o arquivo produtos.json transformando o resultado em um objeto usando o metodo response.json()
    fetch('produtos.json')
    .then(response => response.json())
    .then(corpo => {
        document.getElementById("titulo-produto").innerHTML += "<h2>"+corpo.produto1.name+"</h2>";
        document.getElementById("foto-produto").innerHTML += corpo.produto1.image;
        document.getElementById("titulo-preco").innerHTML += "US$"+corpo.produto1.price; 

        converte(corpo.produto1.price)
        avaliacao(corpo.produto1.avaliacao)
    })
}

//CEP
function calcularFrete(){
    var cep = document.getElementById("cep").value
    var exibirFrete = document.getElementById("valorFrete")
    if(cep.length != 8){
        console.log("cep incorreto");
        return;
    }else{
        const pesquisarCep = async () => {
            const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`); //o fetch busca a url
            const endereco = await dados.json();
            console.log(endereco)
            var freteValor = 0.00.toFixed(2);

            for(x=0; x < regioesBrasil.length; x++){
                if(regioesBrasil[x][1] == endereco.uf){
                    console.log(regioesBrasil[x][0]);
                    console.log(regioesBrasil[x][1]);

                    if(regioesBrasil[x][1] != "SP"){
                        if(regioesBrasil[x][0] == "Sul"){
                            freteValor = 12.00.toFixed(2)
                        }
                        if(regioesBrasil[x][0] == "Sudeste"){
                            freteValor = 8.00.toFixed(2)
                        }
                        if(regioesBrasil[x][0] == "Centro-Oeste"){
                            freteValor = 18.00.toFixed(2)
                        }
                        if(regioesBrasil[x][0] == "Nordeste"){
                            freteValor = 23.00.toFixed(2)
                        }
                        if(regioesBrasil[x][0] == "Norte"){
                            freteValor = 25.00.toFixed(2)
                        }
                    }else{
                        if(regioesBrasil[x][1] == "SP"){
                            var cepSp = parseInt(cep)
                            console.log("CEP de SP: "+ cepSp)
                            if(cepSp>= 1000000 && cepSp<= 1579999){
                                //centro
                                freteValor = 3.00.toFixed(2)
                            }
                            if(cepSp>= 2000000 && cepSp<= 2999999){
                                //Zona Norte 
                                freteValor = 5.00.toFixed(2)
                            }
                            if(cepSp>= 3000000 && cepSp<= 3999999){
                                //Zona Leste 
                                freteValor = 6.00.toFixed(2)
                            }
                            if(cepSp>= 8000000 && cepSp<= 8499999){
                                //Zona Leste 
                                freteValor = 6.00.toFixed(2)
                            }
                            if(cepSp>= 4000000 && cepSp<= 4999999){
                                //Zona Sul
                                freteValor = 7.00.toFixed(2)
                            }
                            if(cepSp>= 5000000 && cepSp<= 5899999){
                                //Zona Oeste 
                                freteValor = 8.00.toFixed(2)
                            }
                            if(cepSp>= 6000000 && cepSp<= 9999999){
                                //Grande São Paulo
                                freteValor = 4.00.toFixed(2)
                            }
                            if(cepSp>= 11000000 && cepSp<= 11999999){
                                //Litoral
                                freteValor = 10.00.toFixed(2)
                            }
                            if(cepSp>= 12000000 && cepSp<= 19999999){
                                //Interior
                                freteValor = 12.00.toFixed(2)
                            }
                        }

                    }
                }
            }
            exibirFrete.innerHTML = "Frete de R$"+freteValor

        }
        pesquisarCep();
    }
}

dados();

//https://rainydays.com.br/faixas-de-cep-de-sao-paulo/
