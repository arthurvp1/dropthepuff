//Variaveis Cadastro
let elementoInputCadastroUser = document.getElementById('inputCadastroUser')
let elementoInputCadastroPassword = document.getElementById('inputCadastroPassword')
let elementoInputCadastroEmail = document.getElementById('inputCadastroEmail')

// Variaveis Login
let elementoInputLoginEmail = document.getElementById('inputLoginEmail')
let elementoInputLoginPassword = document.getElementById('inputLoginPassword')

let elementoLblSituacinal = document.getElementById('lblSituacinal')
let elementoLblSituacinalLogin = document.getElementById('lblSituacinalLogin')


let vetorUsers = []
let objUser = {

    username:'',
    password:'',
    email : ''

}
let loginEfetuado = false 
let dadosCadastroUsado = false

function Login(){
    pesquisaStorage()

    
        if(elementoInputLoginEmail.value != '' && elementoInputLoginPassword.value !=''){
            loginEfetuado = false

            for(i = 0 ; i < vetorUsers.length;i++){

                if(elementoInputLoginEmail.value == vetorUsers[i].email && elementoInputLoginPassword.value == vetorUsers[i].password){
                    
                    loginEfetuado = true
                    userLogado = vetorUsers[i].username
                    localStorage.setItem('userLogin',JSON.stringify(userLogado))

                }
            }
            if(loginEfetuado){
                            
                window.location.href = '../perfil/perfil.html'
                            
            }else{
                
                elementoLblSituacinalLogin.innerHTML = '* Dados Não Conferem !!'            
            }
            

        }else{
            elementoLblSituacinalLogin.innerHTML = '* Preencha os Campos Corretamente !!'

        }

        LimpaCamposLogin()

}
function Cadastrar(){
    pesquisaStorage()
    dadosCadastroUsado = false
    if (vetorUsers == null){

        vetorUsers = []

    }
    if(elementoInputCadastroUser.value != '' && elementoInputCadastroEmail.value != '' && elementoInputCadastroPassword.value !=''){
        
        for(i = 0 ; i < vetorUsers.length; i++){

            if(elementoInputCadastroEmail.value == vetorUsers[i].email){

                dadosCadastroUsado = true

            }

        }
        if(!dadosCadastroUsado){

            Cadastro()
            SalvaStorage()

        }else{
            elementoLblSituacinal.innerHTML = '* Email já em uso !!'
            
        }
    }else{
        elementoLblSituacinal.innerHTML = '* Campos Incorretos !'
        
    }
    LimpaCamposCadastro()

} 


function pesquisaStorage(){

    vetorUsers = JSON.parse(localStorage.getItem('vetorObj'))
}
function Cadastro(){
    objUser = {}
        
    objUser.username = elementoInputCadastroUser.value
    objUser.password = elementoInputCadastroPassword.value
    objUser.email =  elementoInputCadastroEmail.value

    vetorUsers.push(objUser)
    window.location.href="login.html"

}
function SalvaStorage(){

    localStorage.setItem('vetorObj',JSON.stringify(vetorUsers))

}
function LimpaCamposCadastro(){

    elementoInputCadastroUser.value = ''
    elementoInputCadastroPassword.value = ''
    elementoInputCadastroEmail.value = ''

}
function LimpaCamposLogin(){

    elementoInputLoginEmail = ''
    elementoInputLoginPassword = ''

}
function MostraDiv(){
    elementoDivRetornoEmail.style.display = "none"
    elementoDivRetorno.style.display = "flex"
}
function EscondeDiv(){
    elementoDivRetorno.style.display = "none"
}
function MostraDivEmail(){
    elementoDivRetorno.style.display = "none"
    elementoDivRetornoEmail.style.display = "flex"
}