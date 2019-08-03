var div = document.getElementById('log');
var textos = ['MasterCode'];


function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
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
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function(){
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);


// function typeWriter(elemento) {
//     const textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = '';
//     textoArray.forEach((letra, i) => {
//       setTimeout(() => elemento.innerHTML += letra, 75 * i);
//     });
//   }

//   // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
//   // function typeWriter(elemento) {
//   //   const textoArray = elemento.innerHTML.split('');
//   //   elemento.innerHTML = '';
//   //   for(let i = 0; i < textoArray.length; i++) {
//   //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//   //   }
//   // }

//   const titulo = document.getElementById('log');
//   typeWriter(titulo);