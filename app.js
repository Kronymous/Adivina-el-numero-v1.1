//Ultima axtualizacion

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//funcion para el texto del titulo y subtitulo
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Buttom
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'Veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        //El usuario no acerto
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor');
        }else{
            asignarTextoElemento('p','El numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Funcion para limpiar la caja tras no atinar el numero
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

//Funcion para generar el numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;

    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    //si ya srteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('P','Ya se sortearon todos los numeros posibles');
    }else{

    }

    // si el numero generado esta incluido en la lista

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
          
}

function condicionesIniciales(){
    
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    //console.log(numeroSecreto)
    intentos = 1;
}


//funcion para boton nuevo juego
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}

condicionesIniciales();

//by Hector Barrios
