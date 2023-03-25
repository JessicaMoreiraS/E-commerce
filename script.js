var regioesBrasil = [["Norte", "AM"], ["Norte", "RR"], ["Norte", "AP"], ["Norte", "PA"], ["Norte", "TO"], ["Norte", "RO"], ["Norte", "AC"], ["Nordeste", "MA"], ["Nordeste", "PI"], ["Nordeste", "CE"], ["Nordeste", "RN"], ["Nordeste", "PE"], ["Nordeste", "PB"], ["Nordeste", "SE"], ["Nordeste", "AL"], ["Nordeste", "BA"], ["Centro-Oeste", "MT"], ["Centro-Oeste", "DF"], ["Centro-Oeste", "MS"], ["Centro-Oeste", "GO"], ["Sudeste", "SP"], ["Sudeste", "RJ"], ["Sudeste", "ES"], ["Sudeste", "MG"], ["Sul", "PR"], ["Sul", "RS"], ["Sul", "SC"]]

var novoComentario = []
var listaGlobal

index()
function index(){
    document.title = "home";
    document.getElementById("main").innerHTML = '<div id="alinhar-titulos"><div id="container-titulo"><h1>A ASCENSÃO DO<br />VINTAGE 60"S</h1></div><div id="container-subtitulo"><h3>OS MELHORES VESTIDOS DA ÉPOCA</h3><img id="new" src="img/flor-surge.png"></div></div>'+'<div id="categorias"><div id="categoria-1"><div id="oculos"><img id="icon-oculos" src="img/icon-oculos.png" alt="" /><p id="txt-1">ÓCULOS</p></div><div id="bolsas"><img id="icon-bolsa" src="img/icon-bolsa.png" alt="" /><p id="txt-2">BOLSAS</p></div><div id="chapeus"><img id="icon-chapeu" src="img/icon-boina.png" alt="" /><p id="txt-3">CHAPÉUS</p></div></div><div id="categoria-2"><div id="vestidos"><img id="icon-vestido" src="img/icon-vestido.png" alt="" /><p id="txt-4">VESTIDOS</p></div><div id="sapatos"><img id="icon-sapato" src="img/icon-sapato.png" alt="" /><p id="txt-5">SAPATOS</p></div><div id="joias"><img id="icon-joia" src="img/icon-joias.png" alt="" /><p id="txt-6">JOIAS</p></div></div></div><!-- PRODUTOS --><div id="produtos-modelos"><div class="seta-esquerda"><a href="produtos.html"><img class="icon-esquerda" src="img/esquerda.png" alt=""/></a></div><div id="modelo-1"><img id="modelo-um" src="img/modelo-1.png" alt="" onclick="selecionaProd(4)"/><p class="precos" id="areaPrecoM1">'+'</p></div><div id="modelo-2"><img id="modelo-dois" src="img/modelo-2.png" alt="" onclick="selecionaProd(5)"/><p class="precos" id="areaPrecoM2">'+'</p></div><div id="modelo-3"><img id="modelo-tres" src="img/modelo-3.png" alt="" onclick="selecionaProd(6)"/><p class="precos" id="areaPrecoM3">'+'</p></div><div class="seta-direita"><img class="icon-direita" src="img/direita.png" alt=""/></div></div><div class="linha"></div>'+'<!-- PRODUTOS LIMITADOS --><div id="texto-produtos-limitados"><h4>PRODUTOS LIMITADOS</h4></div><div id="produtos-limitados"><div class="seta-esquerda"><img class="icon-esquerda" src="img/esquerda.png" alt="" /></div><div id="vestido-1"><img id="vestido-rosa" src="img/vestido-rosa.png" alt="" onclick="selecionaProd(1)"/><p class="precos" id="areaPrecoV2">'+'</p></div><div id="vestido-2"><img id="vestido-verde" src="img/vestido-verde.png" alt="" onclick="selecionaProd(0)"/><p class="precos" id="areaPrecoV1">'+'</p></div><div id="vestido-3"><img id="vestido-roxo" src="img/vestid-roxo.png" alt="" onclick="selecionaProd(2)"/><p class="precos" id="areaPrecoV3">'+'</p></div><div class="seta-direita"><img class="icon-direita" src="img/direita.png" alt="" /> </div></div></main>'

    fetch('produtos.json')
    .then(response => response.json())
    .then(corpo => { 
    dollarIndex(corpo.modelo1.price, corpo.modelo2.price, corpo.modelo3.price, corpo.vestido1.price, corpo.vestido2.price, corpo.vestido3.price)})
}

function selecionaProd(nProd){
    //Metodo fetch() para buscar o arquivo produtos.json transformando o resultado em um objeto usando o metodo response.json()
    fetch('produtos.json')
    .then(response => response.json())
    .then(corpo => { 
        document.title = "produtos";
        var todosProds = [corpo.vestido1, corpo.vestido2, corpo.vestido3, corpo.vestido4, corpo.modelo1, corpo.modelo2, corpo.modelo3, corpo.saia1, corpo.saia2, corpo.saia3]   
        listaGlobal = todosProds

    document.getElementById("main").innerHTML = '<div id="container-produto"><div id="foto-produto"><div id="espaco-fotos"><div class="caixa"></div><div class="caixa"></div><div class="caixa"></div><div class="caixa"></div><div class="caixa"></div></div><!--<img id="vestido_verde" src="img/vestido-verde.png" alt="" />--></div><div id="detalhes-produto"><h1 id="titulo-produto"></h1><h3 id="titulo-preco"></h3><!-- <div> Ícones feitos por <a href="https://www.flaticon.com/br/autores/smashicons" title="Smashicons"> Smashicons </a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com"</a></div> --><div id="alinhar-estrelas"></div><p id="titulo-avaliacao"></p><div id="produtos-semelhantes"><button id="botao-semelhantes">MODELOS SEMELHANTES <img id="seta-btn" src="img/seta-btn.png" alt="" /></button></div></div></div><!--Frete--><div id="alinhar-produtos"><div id="funcao-frete"><label id="txt-frete" for="">CALCULE O FRETE:</label><div id="frete"><input type="number" id="cep" placeholder="CEP"><button id="btn-frete" onclick="calcularFrete()">CALCULAR</button><div id="valorFrete"></div></div></div><div id="funcao-compra"><div id="funcao-quantidade"><p>QUANTIDADE</p><button id="btn-menos" onclick="diminuiQuantCompra()"><img id="menos" src="img/menos.png" alt="" /></button><input type="number" id="quantProd" value="1" readonly><button onclick="aumentaQuantCompra()"id="btn-mais"><img id="mais" src="img/mais.png" alt="" /></button></div><div id="comprar"><button id="btn-compra">COMPRAR</button><button id="btn-coracao" onclick="favoritar('+nProd+')"><img id="coracaoo" src="img/coracao-vazio.png"></button></div></div></div><div class="linha"></div>'

    document.getElementById("main").innerHTML += '<div class="alinhar-txt" id="texto-produtos-limitados"><h4>OUTROS PRODUTOS</h4></div><div id="outros-produtos"><div id="seta-esquerda"><img class="icon-esquerda" src="img/esquerda.png" alt=""/></div><div id="img-1"><p id="txt-outros-produtos">SAIA VERDE COM PREGAS</p><img id="saia-verde" src="img/saia-verde.png" alt=""  onclick="selecionaProd(7)"/><p class="preco" id="areaPrecoS1">'+'</p></div><div id="img-2"><p id="txt-outros-produtos">SAIA COM BRILHO AZUL</p><img id="saia-azul" src="img/saia-azul.png" alt="" onclick="selecionaProd(8)"/><p class="preco" id="areaPrecoS2">'+'</p></div><div id="img-3"><p id="txt-outros-produtos">VESTIDO LILÁS COM BOTÕES</p><img id="roxo-vestido" src="img/roxo-vestido.jpg" alt="" onclick="selecionaProd(3)"/><p class="preco" id="areaPrecoV4">'+'</p></div><div id="img-4"><p id="txt-outros-produtos">SAIA LONGA ROSA</p><img id="saia-rosa" src="img/saia-rosa.png" alt="" onclick="selecionaProd(9)"/><p class="preco" id="areaPrecoS3">'+'</p></div><div id="seta-direita"><img class="icon-direita"src="img/direita.png" alt="" /></div></div>'

    document.getElementById("main").innerHTML += '<div id="avaliacao"><div id="titulo-avaliacao"><h4 id="avaliacao">AVALIAÇÕES</h4></div></div><div id="titulo-comentarios"><img id="icone-avaliacao" src="img/icone-avaliacao.png" alt="" /><h5>ÚLTIMOS COMENTÁRIOS</h5></div><div class="linhaa"></div><div id="central"><div id="caixa-comentarios">'+'<div id="nomeUser"><div id="comentarioBox"></div>'+'<div id="funcoes-comentario"><button id="btn-comentar" onclick="novoComentar('+nProd+')"><img id="icon-escrever" src="img/escrever.png" alt="" /></button><button id="btn-comentarios"><img id="icon-seta-btn" src="img/seta-btn.png" alt="" /></button></div></div></div></div></div>'

    document.getElementById("titulo-produto").innerHTML += "<h2>"+todosProds[nProd].name+"</h2>";
        document.getElementById("foto-produto").innerHTML += todosProds[nProd].image;
        document.getElementById("titulo-preco").innerHTML += "US$"+todosProds[nProd].price; 

        document.getElementById("main").innerHTML += ''

        //atualizando comentarios
        if(novoComentario.length>0){
            for(w=0; w<novoComentario.length; w++){
                numeroProd = novoComentario[w][0]
                todosProds[numeroProd].comentarios.nomes.push(novoComentario[w][1])
                todosProds[numeroProd].comentarios.estrelas.push(novoComentario[w][2])
                todosProds[numeroProd].comentarios.textos.push(novoComentario[w][3])
                //console.log(todosProds[nProd].comentarios.textos[todosProds[nProd].comentarios.nomes.length-1])
            }
        }
        //soma todas as estrelas
        var totalPontosEstrelas=0
        for(y=0; y<todosProds[nProd].comentarios.estrelas.length; y++){
            totalPontosEstrelas += parseInt(todosProds[nProd].comentarios.estrelas[y])
        }
        todosProds[nProd].avaliacao = totalPontosEstrelas/todosProds[nProd].comentarios.estrelas.length
        console.log("total estrelas: "+todosProds[nProd].avaliacao)

        converte(todosProds[nProd].price)
        avaliacao(todosProds[nProd].avaliacao)
        mostrarComentarios(todosProds, nProd)

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })

    dollarSelecionaProd(corpo.saia1.price, corpo.saia2.price, corpo.saia3.price, corpo.vestido4.price)})
}

const usuario1 = {"nome":"Maria", "email":"maria@gmail.com", "senha":"1234", "favoritos":[]}
const usuario2 = {"nome":"Carla", "email":"carla@gmail.com", "senha":"4321", "favoritos":[]}
var usuarios = [usuario1, usuario2]
var usuarioTentandoSeConectar;
var usuarioConectado;

function opcaoLogin(){
    if(usuarioConectado == null || usuarioConectado == ""){
        document.getElementById('dropdown-content-login').innerHTML = "<a onclick='login()'>Faça Login</a>"      
        document.getElementById('dropdown-content-login').innerHTML += "<a onclick='mainCadastrar()'>Cadastre-se</a>"      
        return;
    }else{
        //mostrar nome do usuario e opcao de logout
        document.getElementById('dropdown-content-login').innerHTML = "<p>Olá "+usuarioConectado.nome+"</p>"      
        document.getElementById('dropdown-content-login').innerHTML += "<a onclick='logout()'>Logout</a>"      
    }
}

function cadastrar(){  
    //verificar se já existe conta com o email informado
    for(x=0; x<usuarios.length; x++){
        if(usuarios[x].email == document.getElementById("email")){
            swal("ops, esse email já está cadastrado")
            return;
        }
    }
    var usuario = new Object
    usuario.nome = document.getElementById("nome")
    usuario.email = document.getElementById("email")
    usuario.senha = document.getElementById("senha")

    var jsonForm = JSON.stringify(usuario.valueOf());
    const usuarioCadastrado = JSON.parse(jsonForm);

    usuarios.push(usuarioCadastrado);
    index();
}

function login(){
    var senhaCorreta;
    swal("Digite seu email",{
        content:{
            element: "input",
            attributes: {
                placeholder: "maria@gmail.com",
                type:"email",
            }
        }
    }).then((userEmail) => {
        for(x=0;x<usuarios.length; x++){
            if(usuarios[x].email == userEmail){
                senhaCorreta = usuarios[x].senha
                usuarioTentandoSeConectar = usuarios[x]
                swal("Olá "+usuarios[x].nome+". Digite sua senha",{
                    content:{
                        element:"input",
                        attributes:{
                            type:"password",
                            placeholder: "1234",
                        }
                    }
                }).then((userSenha) => {              
                    verificaSenha(userSenha, senhaCorreta, usuarioTentandoSeConectar)
                })
                return;
            }
            if(x==usuarios.length-1){
                swal("Esse email não está cadastrado. Login não realizado")
                return;
            }
        }
    })
}
function verificaSenha(userSenha, senhaCorreta, usuario){
    if(userSenha == senhaCorreta){
        usuarioConectado = usuario
        swal("Login realizado")
        console.log(usuarioConectado)
    } else{
        swal("senha incorreta. Login não realizado")
    }
}

function logout(){
    if(usuarioConectado != "" && usuarioConectado != null){
        swal("Tem ceteza de que deseja sair?",{
            buttons: {
                Continuar: true,
                Sair: true,
              },
            }
        ).then((valor) => {
            if(valor == "Sair"){
                usuarioConectado = null
                swal("Volte sempre!")
                return;
            }else{
                return;
            }
        })
    }
}

function novoComentar(nProd){
    if(usuarioConectado == null || usuarioConectado == ""){
        swal("Efetue seu login para comentar")
        return;
    }

    swal("Escolha a pontuação, sendo 0 equivalente a pouco satisfeito e 5 quivalendo a muito satisfeito",{
         content: {
            element: "input",
            attributes: {
                placeholder: "digite entre 0 e 5",
                type: "number",
                min: 0,
                max: 5
            },
         }
    }).then((valuee) => {
        if(valuee == "" || valuee == null){
            swal("Ops, escolha uma nota entre 0 e 5")
            return;
        }
        swal("Escreva seu comentarios:", {
            content: "input",
        })
        .then((value) => {
            if(value == null || value ==""){
                swal("ops, parece que você esqueceu de escrever seu comentario. Tente novamente.");
                return;
            }
            swal(`Seu comentario é: ${value}`);
            texto = value;
            novoComentario.push([nProd, usuarioConectado.nome, valuee, texto]);
            selecionaProd(nProd)
        });
    })
}

function arredondar(n) {
    return (Math.round(n * 100) / 100).toFixed(2);
}

//Metodo fetch() Dollar do produto escolhido
function converte(valorEmDolar){
    fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`).then(response=>{
        return response.json()
    }).then(economia => { 
        document.getElementById("titulo-preco").innerHTML += " - R$"+arredondar(economia.USDBRL.bid*valorEmDolar);
    })
}
//fetch Dollar index
function dollarIndex(m1, m2, m3, v1, v2, v3){
    fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`).then(response=>{
        return response.json()
    }).then(economiaa => { 
        document.getElementById("areaPrecoM1").innerHTML = "US$"+m1+" - R$"+arredondar(economiaa.USDBRL.bid*m1);
        document.getElementById("areaPrecoM2").innerHTML = "US$"+m2+" - R$"+arredondar(economiaa.USDBRL.bid*m2);
        document.getElementById("areaPrecoM3").innerHTML = "US$"+m3+" - R$"+arredondar(economiaa.USDBRL.bid*m3);
        document.getElementById("areaPrecoV1").innerHTML = "US$"+v1+" - R$"+arredondar(economiaa.USDBRL.bid*v1);
        document.getElementById("areaPrecoV2").innerHTML = "US$"+v2+" - R$"+arredondar(economiaa.USDBRL.bid*v2);
        document.getElementById("areaPrecoV3").innerHTML = "US$"+v3+" - R$"+arredondar(economiaa.USDBRL.bid*v3);
    })
}
//fetch Dollar outros produtos
function dollarSelecionaProd(s1, s2, s3, v4){
    fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`).then(response=>{
        return response.json()
    }).then(economiaa => { 
        document.getElementById("areaPrecoS1").innerHTML = "US$"+s1+" - R$"+arredondar(economiaa.USDBRL.bid*s1);
        document.getElementById("areaPrecoS2").innerHTML = "US$"+s2+" - R$"+arredondar(economiaa.USDBRL.bid*s2);
        document.getElementById("areaPrecoS3").innerHTML = "US$"+s3+" - R$"+arredondar(economiaa.USDBRL.bid*s3);
        document.getElementById("areaPrecoV4").innerHTML = "US$"+v4+" - R$"+arredondar(economiaa.USDBRL.bid*v4);
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
            document.getElementById("alinhar-estrelas").innerHTML += "<img class=estrela src='imagens/estrelaCheia.png' width='6%'>"
            totalEstrelasOcupadas = nEstrelas;
        }
    }else{
        if(nEstrelas%2 > 1){
            var nEstrelasCheias = nEstrelas - nEstrelas%2+1;
        }
        if(nEstrelas%2 < 1){
            var nEstrelasCheias = nEstrelas - nEstrelas%2;
        }
        for(a=0; a<nEstrelasCheias; a++){
            document.getElementById("alinhar-estrelas").innerHTML += "<img class=estrela src='imagens/estrelaCheia.png' width='6%'>"
        }
        document.getElementById("alinhar-estrelas").innerHTML += "<img class=estrela src='imagens/meiaEstrela.png' width='6%'>"
        totalEstrelasOcupadas = nEstrelasCheias +1;
    }
    for(c=0; c<totalEstrelas-totalEstrelasOcupadas; c++){
        document.getElementById("alinhar-estrelas").innerHTML += "<img class=estrela src='imagens/estrelaVazia.png' width='6%'>"
    }

    if(nEstrelas >=4){
        document.getElementById("titulo-avaliacao").innerHTML="Esse produto foi bem avaliado"
    }
}


//COMENTÁRIOS (3 ultimos)
function mostrarComentarios(vetor, nProduto){ 
    document.getElementById("comentarioBox").innerHTML ="" 
    for(b=vetor[nProduto].comentarios.nomes.length-1; b>=vetor[nProduto].comentarios.nomes.length-3; b=b-1){
        document.getElementById("comentarioBox").innerHTML += "<div id='divNome'><p>"+vetor[nProduto].comentarios.nomes[b]+"</p></div>"
        for(a=0; a<vetor[nProduto].comentarios.estrelas[b]; a++){
            document.getElementById("comentarioBox").innerHTML +="<img src=imagens/estrelaCheia.png width='3%'>"
        }
        document.getElementById("comentarioBox").innerHTML += "<div id='nota'><p>"+vetor[nProduto].comentarios.estrelas[b]+"</p></div>"
        document.getElementById("comentarioBox").innerHTML += "<div id='comentario'><p>"+vetor[nProduto].comentarios.textos[b] +"</p></div>"
    }    
}


//CEP
function calcularFrete(){
    var cep = document.getElementById("cep").value
    var exibirFrete = document.getElementById("valorFrete")
    if(cep.length != 8){
        swal("cep incorreto");
        return;
    }else{
        const pesquisarCep = async () => {
            const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`); //o fetch busca a url
            const endereco = await dados.json();
            console.log(endereco)
            var freteValor = 0.00.toFixed(2);
            var regiao;

            for(x=0; x < regioesBrasil.length; x++){
                if(regioesBrasil[x][1] == endereco.uf){

                    if(regioesBrasil[x][1] != "SP"){
                        if(regioesBrasil[x][0] == "Sul"){
                            freteValor = 12.00.toFixed(2)
                            regiao = "Sul"
                        }
                        if(regioesBrasil[x][0] == "Sudeste"){
                            freteValor = 8.00.toFixed(2)
                            regiao = "Sudeste"
                        }
                        if(regioesBrasil[x][0] == "Centro-Oeste"){
                            freteValor = 18.00.toFixed(2)
                            regiao = "Centro-Oeste"
                        }
                        if(regioesBrasil[x][0] == "Nordeste"){
                            freteValor = 23.00.toFixed(2)
                            regiao = "Nordeste"
                        }
                        if(regioesBrasil[x][0] == "Norte"){
                            freteValor = 25.00.toFixed(2)
                            regiao = "Norte"
                        }
                    }else{
                        if(regioesBrasil[x][1] == "SP"){
                            var cepSp = parseInt(cep)
                            if(cepSp>= 1000000 && cepSp<= 1579999){
                                //centro
                                freteValor = 3.00.toFixed(2)
                                regiao = "Centro de SP"
                            }
                            if(cepSp>= 2000000 && cepSp<= 2999999){
                                //Zona Norte 
                                freteValor = 5.00.toFixed(2)
                                regiao = "Norte de SP"
                            }
                            if(cepSp>= 3000000 && cepSp<= 3999999){
                                //Zona Leste 
                                freteValor = 6.00.toFixed(2)
                                regiao = "Leste de SP"
                            }
                            if(cepSp>= 8000000 && cepSp<= 8499999){
                                //Zona Leste 
                                freteValor = 6.00.toFixed(2)
                                regiao = "Leste de SP"
                            }
                            if(cepSp>= 4000000 && cepSp<= 4999999){
                                //Zona Sul
                                freteValor = 7.00.toFixed(2)
                                regiao = "Sul de SP"
                            }
                            if(cepSp>= 5000000 && cepSp<= 5899999){
                                //Zona Oeste 
                                freteValor = 8.00.toFixed(2)
                                regiao = "Oeste de SP"
                            }
                            if(cepSp>= 6000000 && cepSp<= 9999999){
                                //Grande São Paulo
                                freteValor = 4.00.toFixed(2)
                                regiao = "Grande São Paulo"
                            }
                            if(cepSp>= 11000000 && cepSp<= 11999999){
                                //Litoral
                                freteValor = 10.00.toFixed(2)
                                regiao = "Litoreal de SP"
                            }
                            if(cepSp>= 12000000 && cepSp<= 19999999){
                                //Interior
                                freteValor = 12.00.toFixed(2)
                                regiao = "Interior de SP"
                            }
                        }

                    }
                }
            }
            exibirFrete.innerHTML = "Para a região de "+regiao+" o frete é de R$"+freteValor
        }
        pesquisarCep();
    }
}
var quantProd 
function aumentaQuantCompra(){
    quantProd = document.getElementById("quantProd").value;
    quantProd++;
    document.getElementById("quantProd").value = quantProd
}

function diminuiQuantCompra(){
    quantProd = document.getElementById("quantProd").value;
    quantProd--;
    if(quantProd < 1){
        quantProd = 1
    }
    document.getElementById("quantProd").value = quantProd
}

// FAVORITAR UM PRODUTO
function favoritar(nProd){
    if(usuarioConectado == null || usuarioConectado == ""){
        swal("Efetue seu login para favoritar esse produto")
        return;
    }
    for(x=0; x<usuarioConectado.favoritos.length; x++){
        if(usuarioConectado.favoritos[x] == nProd){
            swal("esse itam já está em sua lista de desejo",{
            buttons: {
                Manter: true,
                Excluir: true,
              },}
            ).then((valor) => {
                if(valor == "Excluir"){
                    usuarioConectado.favoritos.splice(x, 1)
                    return;
                }else{
                    return;
                }
            })
            return; 
        }
    }
    usuarioConectado.favoritos.push(nProd);
    swal("Adicionado a lista de desejos!", {
        button: false,
    });
}

function mostrarListaDeDesejos(){
    if(usuarioConectado == null || usuarioConectado == ""){
        // swal("Efetue seu login para ver sua lista de desejos")
        document.getElementById('dropdown-content').innerHTML = null
        return;
    }
    document.getElementById('dropdown-content').innerHTML =""
    if(usuarioConectado.favoritos.length>0){
        for(x=0; x<usuarioConectado.favoritos.length; x++){
            //droppdown para mostrar itens da lista
            document.getElementById('dropdown-content').innerHTML += "<a onclick='selecionaProd("+usuarioConectado.favoritos[x]+")'>"+listaGlobal[usuarioConectado.favoritos[x]].name+"</a>"         
        }
    }
}


//window.location='produto.html'   //redirecionamento

// if (window.open && posicao != -1) { // Window.opener/open recebe os dados da página que gerou a atual
//     console.log("open")}


// Jéssica, pode tentar arrumar o tamanho do input que criei pra quando clicar no buscar e também posicionar ele certo? Já deixei o ícone de pequisa do cabeçalho como botão

// function buscar(){
//     var elemento_pai = document.getElementById("icones-direita");

//     // Criar o input ao clicar no elemento de busca
//     var titulo = document.createElement('input');

    
//     // Criar texto apenas para constar a criação
//     var texto = document.createTextNode("");
    
//     // Anexar o nó de texto ao elemento input
//     titulo.appendChild(texto);
    
//     // Inserir (anexar) o elemento filho (titulo) ao elemento pai (header)
//     elemento_pai.appendChild(titulo);
// }
