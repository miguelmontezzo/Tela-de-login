//Variáveis

let btn=document.querySelector('.fa-eye')

//Eventos e funções

//Função olhar senha
btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
})
//================================

//Função entrar

function entrar(){
  let usuario = document.querySelector('#usuario')
  let labelUsuario = document.querySelector('#labelUsuario')

  let senha = document.querySelector('#senha')
  let labelSenha = document.querySelector('#labelSenha')

  let msgErro = document.querySelector('#msgErro')

//dados localstorage

  let listaUser = []

  let userValid = {
    nome: '',
    user: '',
    senha: '',
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))
//================================

//Função varredura

  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad
      }
    }
  })
//================================

//Validar usuário e senha

  if(usuario.value == userValid.user && senha.value == userValid.senha){
    labelUsuario.setAttribute('style', 'color: #2a9d8f')
    usuario.setAttribute('style', 'border-color: #2a9d8f')
    labelSenha.setAttribute('style', 'color: #2a9d8f')
    senha.setAttribute('style', 'border-color: #2a9d8f')
    msgSucesso.setAttribute('style', 'display: block')
    msgSucesso.innerHTML = 'Fazendo o login, aguarde...'
    msgErro.setAttribute('style', 'display: none')
    msgErro.innerHTML = ''

  //redirecionamento
    setTimeout(() => {
      window.location.href = 'http://127.0.0.1:5500/Login/logado.html'
      }, 3000);
  //================
    
    let token = Math.random().toString(16).substring(2)
    localStorage.setItem('token', token)

  } else {
    labelUsuario.setAttribute('style', 'color: #e76f51')
    usuario.setAttribute('style', 'border-color: #e76f51')
    labelSenha.setAttribute('style', 'color: #e76f51')
    senha.setAttribute('style', 'border-color: #e76f51')
    msgErro.setAttribute('style', 'display: block')
    msgErro.innerHTML = 'Usuário ou senha incorretos'
    msgSucesso.setAttribute('style', 'display: none')
    msgSucesso.innerHTML = ''
    usuario.focus()

  }

//================================

//console actions

console.log(listaUser)
console.log(userValid)

}

//================================

