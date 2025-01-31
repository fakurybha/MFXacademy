
const txtLogin = document.querySelector('#txt_login')
const txtSenha = document.querySelector('#txt_senha')

 
let loginCadastrado = 'edcarlos'
let loginSenha = '123'

function validaLogin() {

    

    if (txtLogin.value == loginCadastrado && txtSenha.value == loginSenha) {
        alert("usuario logado com sucesso")
        txtLogin.value = ''
        txtSenha.value = ''
        }else {
            alert("acesso negado")
            txtLogin.value = ''
            txtSenha.value = ''
        }

    }