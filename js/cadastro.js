let btn = document.getElementById('btn')
let div = document.getElementById('resultado')


//criando array
    let arrCadastro = [];

function cadastrar (){
    
    let log = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        endereco: document.getElementById('end').value,
        complemento: document.getElementById('complemento').value,
        num: document.getElementById('num').value,
        cidade: document.getElementById('cidade').value,
        bairro: document.getElementById('bairro').value,
        estado: document.getElementById('estado').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        csenha: document.getElementById('csenha').value
    }
   
    if ( log.nome == "" || log.sobrenome == "" || log.endereco == "" || log.num == "" || log.cidade == "" || log.bairro == "" || log.estado == "" || log.email == "" || log.senha == "" || log.csenha == ""){
        alert("Preencha todos os campos marcados como obrigatórios")
    }
    if (log.senha != log.csenha){
        alert("Erro ao confirmar senha, verifique novamente!")
    }
    else{
        arrCadastro.push(log)
    }

    imprimir()
    limpar()

}

function imprimir (){
    div.innerHTML=""
    for (let i= 0 ; i  < arrCadastro.length; i++){
        div.innerHTML += `
            <p class="alert alert-primary">
            <strong>Cadastro concluído com sucesso!</strong> 
            </p><p class="alert alert-primary"><strong> Faça seu login e aproveite nosso catálogo </strong> 
            </p>
        `
        console.log (`nome: ${arrCadastro[i].nome}\n sobrenome: ${arrCadastro[i].sobrenome}\n endereço ${arrCadastro[i].endereco}\n complemento: ${arrCadastro[i].complemento}\n num: ${arrCadastro[i].num}\n cidade: ${arrCadastro[i].cidade}\n bairro: ${arrCadastro[i].bairro}\n estado: ${arrCadastro[i].estado}\n email: ${arrCadastro[i].email}`)
    }
}

function limpar(){
    document.getElementById('nome').value = ""
    document.getElementById('nome').focus()
    document.getElementById('sobrenome').value = ""
    document.getElementById('end').value = ""
    document.getElementById('complemento').value = ""
    document.getElementById('num').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('estado').value = "0"
    document.getElementById('email').value = ""
    document.getElementById('senha').value = ""
    document.getElementById('csenha').value = ""



}


btn.addEventListener('click', cadastrar)