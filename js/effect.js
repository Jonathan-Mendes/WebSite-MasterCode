var div = document.getElementById('mc');
var textos = ['MasterCode'];
var click = false
window.onscroll = function () { scrollFunction() };

// Efeito máquina de escrever
function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 500);
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 300);
}

function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function () {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb) {
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function () {
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);

// Efeito scroll
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtnTop").style.display = "block";
        document.getElementById("myBtnWhats").style.display = "block";
    } else {
        document.getElementById("myBtnTop").style.display = "none";
        document.getElementById("myBtnWhats").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function relative() {
    btnColapse = document.getElementById("menu")
    if (click) {
        btnColapse.className = 'navbar-nav ulRight';
        click = false
    } else {
        btnColapse.className = 'navbar-nav';
        click = true
    }
}

// Enviar E-mail

function sendEmail() {
    inputName = document.getElementById("name")
    inputEmail = document.getElementById("address")
    textArea = document.getElementById("message")
    inputPhone = document.getElementById("phone")
    inputMsg = document.getElementById("email-subject")
    listSpan = document.getElementsByClassName("campoObrigatorio")
    let enviado = 0

    if (inputName.value === "") {
        listSpan[0].className = "campoObrigatorio"
    } else {
        listSpan[0].className = "campoObrigatorio displayNone"
        enviado += 1
    } 
    
    if (inputEmail.value === "" || inputEmail.value.indexOf("@") === -1) {
        listSpan[1].className = "campoObrigatorio"
    } else {
        listSpan[1].className = "campoObrigatorio displayNone"
        enviado += 1
    }

    if (textArea.value === "") {
        listSpan[2].className = "campoObrigatorio"
    } else {
        listSpan[2].className = "campoObrigatorio displayNone"
        enviado += 1
    }

    if(enviado === 3){
        abrirPopUp()
        // inputName.value = ''
        // inputEmail.value = ''
        // inputPhone.value = ''
        // inputMsg.value = ''
        // textArea.value = ''
    }
}


function abrirPopUp() {
    var openPopUp = document.getElementById('popup')
    openPopUp.style.display = 'block'

}

function fecharPopUp() {
    var closePopUp = document.getElementById('popup')
    closePopUp.style.display = 'none'
}