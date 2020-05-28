


let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0, puntosComputadora = 0;

// Referencias de HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHtml = document.querySelectorAll('small');


// Esta funcion crea una baraja
const crearDeck = () => {

    for(let i = 2; i <= 10; i++ ){

        for(let tipo of tipos){
             deck.push(i + tipo);
        }
       
    }
    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
    }


    deck = _.shuffle(deck);
    return deck;
}


crearDeck();


// Esta funcion permite tomas cartas
const pedirCarta = () => {

    if(deck.length === 0){
        throw 'No hay cartas en la baraja';
    }

    const carta = deck.pop();
    return carta;
}

// pedirCarta();
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length -1);
    return (isNaN(valor) ) ? 
           (valor === 'A') ? 11 : 10
           : valor * 1;
    
}

// Turno computadora
const turnoComputadora = (puntosMinimos) => {

    do {

        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHtml[1].innerText = puntosComputadora; 

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21) {
            break;
        }


    } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {
            
            if(puntosComputadora === puntosMinimos) {
                alert('Nadie gana!');
            }else if(puntosMinimos > 21) {
                alert('La computadora gana!');
            }else if(puntosComputadora > 21) {
                alert('Ganaste');
            }else {
                alert('La computadora gana');
            }
            
        }, 15);

}


// Eventos 
btnPedir.addEventListener('click',() => {

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador; 

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);


    if(puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if(puntosJugador === 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }


});

btnDetener.addEventListener('click',() => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

});


btnNuevo.addEventListener('click',() => {
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHtml[0].innerText = 0;
    puntosHtml[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;

});

