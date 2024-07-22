//Ultima axtualizacion

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//función para el texto del título y subtítulo
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Botón
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    // Verificar si el número ingresado es mayor que el número máximo permitido
    if (numeroDeUsuario > numeroMaximo) {
        asignarTextoElemento('p', `El número ingresado no es válido. Debe ser menor o igual a ${numeroMaximo}.`);
        limpiarCaja();
        return;
    }

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        //El usuario no acertó
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es mayor');
        }else{
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Función para limpiar la caja tras no atinar el número
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

//Función para generar el número aleatorio
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;

    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    //console.log(numeroSecreto)
    intentos = 1;
}

//Función para botón nuevo juego
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}

condicionesIniciales();


//by Hector Barrios
