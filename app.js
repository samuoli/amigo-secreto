let amigos = [];
let amigosorteado = sortearAmigo();

function adicionarAmigo(){
    let inputAmigo = document.querySelector("input"); // recebe o input pela tag
    let nome = inputAmigo.value.trim(); //'recorta' espaços antes e depois

    if(nome.length === 0){
        alert('Por favor, insira um nome.');
        return; //Para a função se não tem valor dentro do input
    }
    amigos.push(nome); //adiciona na lista

    exibirLista();
    inputAmigo.value = ""; //limpa o input pro próximo nome
}

function exibirLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('A lista está vazia. Adicione amigos antes de continuar.');
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado foi: ${amigoSorteado}</li>`;
}
