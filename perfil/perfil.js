
var variavelqtd = localStorage.getItem ('quantidadepods')
var preferdificuldade = localStorage.getItem ('preferenciadificuldade')


if(variavelqtd != null && preferdificuldade != null){
    
    document.getElementById('qtdpods').disabled = true
    document.getElementById('preferenciadificuldade').disabled = true
}

function carregarimg(){
    
    pesquisaStorage()
    for(i = 0;i < vetorUsers.length;i++){
        
        teste = vetorUsers[i].username
        
        if(userLogado == teste){
            
            url = vetorUsers[i].img
        }
    }
    if(url != null){

        document.getElementById("imgPerfil").setAttribute('src', url)
    }
}

function trocarImagem(){
    
    pesquisaStorage()
    let url = document.getElementById('inpImagem').value
    if(url != ''){
        
        document.getElementById("imgPerfil").setAttribute('src', url)
        
        document.getElementById('inpImagem').value = ''
        
        for(i = 0;i < vetorUsers.length;i++){
            
            teste = vetorUsers[i].username
            
            if(userLogado == teste){
                
                vetorUsers[i].img = url
            }
            
        }
        
    }
        
        // localStorage.setItem('img', JSON.stringify(url))
        

    //selects de preferencia pods
    SalvaStorage()
}
function salvarPerfil(){
    
    verificarEstadoInputs()
    
    var valorselectqtdpods = document.getElementById('qtdpods').value
    var valorselectpreferencia = document.getElementById('preferenciadificuldade').value
    
    localStorage.setItem('quantidadepods', JSON.stringify(valorselectqtdpods));
    localStorage.setItem('preferenciadificuldade', JSON.stringify(valorselectpreferencia));

    verificarEstadoInputs()


}

function apagarConta(){

    limparLocalStorage()
    window.location.replace("../login e cadastro/cadastro.html");
}


window.onload = verificarEstadoInputs;

    function verificarEstadoInputs() {
        var variavelqtd = localStorage.getItem('quantidadepods');
        var preferdificuldade = localStorage.getItem('preferenciadificuldade');
    
        if (variavelqtd !== null && preferdificuldade !== null) {
            document.getElementById('qtdpods').disabled = true;
            document.getElementById('preferenciadificuldade').disabled = true;
        } else {
            document.getElementById('qtdpods').disabled = false;
            document.getElementById('preferenciadificuldade').disabled = false;
        }
    }


//functions para limpar localstorage

        function limparLocalStorage(){
            localStorage.clear()
        }




        //codigo luiz

        let elementoInptUser = document.getElementById("inptUsername")
        let elementoInptEmail = document.getElementById("inptEmailPerfil")
        let elementoInptPassword = document.getElementById("inptPasswordPerfil")
        let elementoInptFirstName = document.getElementById("inptFisrtName")
        let elementoInptLastName = document.getElementById("inptLastName")
        
        let elementoLblUser = document.getElementById("usernamePerfil")
        let elementoLblNome = document.getElementById("nomePerfil")
        let elementoLblEmail = document.getElementById("emailPerfil")
        
        let teste
        let userLogado = JSON.parse(localStorage.getItem('userLogin'))
        
        let vetorUsers = JSON.parse(localStorage.getItem('vetorObj'))
        let emailUser
        let nomeUser
        let primeiroNomeUser
        let segundoNomeUser



            for(i = 0; i < vetorUsers.length; i ++){

                teste = vetorUsers[i].username

                if(userLogado == teste){

                    emailUser = vetorUsers[i].email
                    nomeUser = vetorUsers[i].primeiroNome + ' '+vetorUsers[i].lastNome
                    primeiroNomeUser = vetorUsers[i].primeiroNome
                    segundoNomeUser = vetorUsers[i].lastNome
                }
                
            }
            elementoInptEmail.value = emailUser
            if(primeiroNomeUser != null && segundoNomeUser != null){

                elementoInptFirstName.value = primeiroNomeUser
                elementoInptLastName.value = segundoNomeUser
                elementoLblNome.innerHTML = nomeUser
            }
            elementoInptUser.value = userLogado

            elementoLblEmail.innerHTML = emailUser
            elementoLblUser.innerHTML = userLogado

            function pesquisaStorage(){

                vetorUsers = JSON.parse(localStorage.getItem('vetorObj'))
                verificarEstadoInputs()
            }
            function SalvaStorage(){

                localStorage.setItem('vetorObj',JSON.stringify(vetorUsers))
                verificarEstadoInputs()

            }

            function SalvarPerfilUser(){

                location.reload()
                
                pesquisaStorage()

                for(i = 0; i < vetorUsers.length; i ++){

                    teste = vetorUsers[i].username
                
                    if(userLogado == teste){
                        if(elementoInptFirstName.value != '' && elementoInptLastName.value != ''){

                            vetorUsers[i].primeiroNome = elementoInptFirstName.value
                            vetorUsers[i].lastNome = elementoInptLastName.value
                        }
                        if(elementoInptUser.value != ''){

                            vetorUsers[i].username = elementoInptUser.value
                        }
                        if(elementoInptEmail.value != ''){

                            vetorUsers[i].email = elementoInptEmail.value
                        }
                        if(elementoInptPassword.value != ''){

                            vetorUsers[i].password = elementoInptPassword.value
                        }
                    }
                    
                }
                verificarEstadoInputs()
                SalvaStorage()


            }
            window.onload = carregarimg()

function setarLocalstorage() {
    var vetorobjeto = [
        {
            username: 'arthur',
            password: '1234',
            email: 'arthur@gmail.com'
        }
    ]
    localStorage.setItem('vetorusuario', JSON.stringify(vetorobjeto))

    var setar = localStorage.getItem('vetorusuario')


}


function mostrarSenha() {
    var inputPass = document.getElementById('inptPasswordPerfil')
    var btnShowPass = document.getElementById('bttSenha')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    } else {
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
}

function abrirModal() {
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}