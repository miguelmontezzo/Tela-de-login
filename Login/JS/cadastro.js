//Variáveis

let btn = document.querySelector('#verSenha')
let btnConfirma = document.querySelector('#verConfirmaSenha')
 
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmaSenha = document.querySelector('#confirmasenha')
let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha')
let validConfirmaSenha = false

let msgErro = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')



//Eventos e funções

//Nome

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: #e76f51')
    labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
    nome.setAttribute('style', 'border-color: #e76f51')
    validNome = false
    } else {
    labelNome.setAttribute('style', 'color: #2a9d8f')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: #2a9d8f')
    validNome = true
    }
  })

//Usuário

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 2){
    labelUsuario.setAttribute('style', 'color: #e76f51')
    labelUsuario.innerHTML = 'Usuário *Insira no mínimo 3 caracteres'
    usuario.setAttribute('style', 'border-color: #e76f51')
    validUsuario = false
    } else {
    labelUsuario.setAttribute('style', 'color: #2a9d8f')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: #2a9d8f')
    validUsuario = true
    }
  })

//Senha

btn.addEventListener('click',()=>{
  let inputSenha = document.querySelector('#senha')

  if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: #e76f51')
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
    senha.setAttribute('style', 'border-color: #e76f51')
    validSenha = false
    } else {
    labelSenha.setAttribute('style', 'color: #2a9d8f')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: #2a9d8f')
    validSenha = true
    }
  })

//Confirmar Senha

btnConfirma.addEventListener('click',()=>{
  let inputConfirmaSenha = document.querySelector('#confirmasenha')

  if(inputConfirmaSenha.getAttribute('type') == 'password'){
      inputConfirmaSenha.setAttribute('type', 'text')
  } else {
    inputConfirmaSenha.setAttribute('type', 'password')
  }
})

confirmaSenha.addEventListener('keyup', () => {
  if(senha.value != confirmaSenha.value){
    labelConfirmaSenha.setAttribute('style', 'color: #e76f51')
    labelConfirmaSenha.innerHTML = 'Confirmar senha *As senhas não conferem'
    confirmaSenha.setAttribute('style', 'border-color: #e76f51')
    validConfirmaSenha = false
    } else {
    labelConfirmaSenha.setAttribute('style', 'color: #2a9d8f')
    labelConfirmaSenha.innerHTML = 'Confirmar senha'
    confirmaSenha.setAttribute('style', 'border-color: #2a9d8f')
    validConfirmaSenha = true
    }
  })

//Botão cadastrar

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmaSenha){

//banco de dados
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    listaUser.push({
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    })

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

//================================

    msgSucesso.setAttribute('style', 'display: block')
    msgSucesso.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgErro.setAttribute('style', 'display: none')
    msgErro.innerHTML = ''

    setTimeout(() => {
      window.location.href = 'http://127.0.0.1:5500/Login/home.html'
    }, 3000);
    
  } else {
    msgErro.setAttribute('style', 'display: block')
    msgErro.innerHTML = '<strong>Algo deu errado, confira se todos os campos foram preenchidos corretamente.</strong>'
    msgSucesso.setAttribute('style', 'display: none')
    msgSucesso.innerHTML = ''
  }
}