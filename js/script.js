// ** INIZIALIZZAZIONE CONSTANTI E VARIABILI **//
const btn = document.getElementById('fl_btn-header');
const container = document.getElementById('container');
let squareNumber = '';
let gameLevel = '';


// // 1. Quando preme su Play faccio leggere il valore della select e faccio registrare il numero di quadrati da stampare
document.getElementById('fl_btn-header').addEventListener('click', function(){
  
  container.innerHTML = '';
  const boxSquare = document.createElement('div');
  boxSquare.className = 'box-square';
  container.append(boxSquare);
  
  let valoreLetto = document.getElementById('select-livello').value;
  console.log(valoreLetto);
  
  
  if(valoreLetto == '1'){
    squareNumber = 100;
    console.log(squareNumber);
    gameLevel = 'crazy';

    for(let i = 1; i <= squareNumber; i++){
      squareGenerator (boxSquare, gameLevel);
    }

    const sq = document.getElementsByClassName('square');
    const listaRandom = listanumBomb(16, 1, squareNumber);
    console.log(listaRandom);
    
    
    for(let i = 1; i <= sq.length; i++){
      const numeriCliccati = [];
      let cella = sq[i-1];
      cella.innerHTML = `<span>${i}</span>`;
      cella.addEventListener('click', function(event){
       
        console.log('elemento clcicato', event.target);

        let numeroCliccatoAdesso = parseInt(event.target.innerText);

        event.target.classList.add('clicked');
        console.log(event.target.innerText);
        numeriCliccati.push(numeroCliccatoAdesso);
        console.log(numeriCliccati);
        
        if(listaRandom.includes(numeroCliccatoAdesso)){
          console.log('Hai perso');
          event.target.classList.remove('clicked');
          event.target.classList.add('bomb');
        }
      })
    }
    
    
  }else if(valoreLetto == '2'){
    squareNumber = 81;
    console.log(squareNumber);
    gameLevel = 'easy';
    for(let i = 1; i <= squareNumber; i++){
      squareGenerator (boxSquare, gameLevel);
    }
    const sq = document.getElementsByClassName('square');
    for(let i = 1; i <= sq.length; i++){
      let cella = sq[i-1];
      cella.innerHTML = `<span>${i}</span>`;
      cella.addEventListener('click', function(){
        cella.classList.add('clicked');
      })
    }
    const listaRandom = listanumBomb(16, 1, squareNumber);
    console.log(listaRandom);
    
  }else if(valoreLetto == '3'){
    squareNumber = 49;
    console.log(squareNumber);
    gameLevel = 'hard';
    for(let i = 1; i <= squareNumber; i++){
      squareGenerator (boxSquare, gameLevel);
    }
    const sq = document.getElementsByClassName('square');
    for(let i = 1; i <= sq.length; i++){
      let cella = sq[i-1];
      cella.innerHTML = `<span>${i}</span>`;
      cella.addEventListener('click', function(){
        cella.classList.add('clicked');
      })
    }
    const listaRandom = listanumBomb(16, 1, squareNumber);
    console.log(listaRandom);
  }
  });


// **********FUNZIONI****************

// generatore di square
function squareGenerator (target, level){
    const sq = document.createElement('div');
    // const nR = gererazioneUnivocaNumRandom(lista, num1, num2);
    // controllo se il numero è pari o dispari
    const classes = ['square', level];
    // sq.innerHTML = `<span>${nR}</span>`;
    sq.classList.add(...classes);
    target.append(sq);
    return sq;
  }

  // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
  function listanumBomb (nB, num1, num2){
    const listaNumBomb = [];
    for(let i = 0; i < nB; i++){
      let numRandom = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
      if(!listaNumBomb.includes(numRandom)){
        listaNumBomb.push(numRandom);
      }else{
        i--;
      }
    }
    return listaNumBomb;
  }
  // I numeri nella lista delle bombe non possono essere duplicati.
  // In seguito l’utente clicca su ogni cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
  // La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
  // Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.












































  // +++++++++++++++++++++++++++++++++++++++++++++++
  // VECCHIA VERSIONE
// §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
//   // ** INIZIALIZZAZIONE CONSTANTI E VARIABILI **//
// const btn = document.getElementById('fl_btn-header');
// // const boxSquare = document.querySelector('.box-square');
// const msgStart = document.getElementById('msg-start');
// const container = document.getElementById('container');
// let squareNumber = '';
// let gameLevel = '';


// // // 1. Quando preme su Play faccio leggere il valore della select e faccio registrare il numero di quadrati da stampare
// document.getElementById('fl_btn-header').addEventListener('click', function(){
//   // msgStart.className = 'hide';
//   // boxSquare.className = 'box-square';
//   container.innerHTML = '';
//   const boxSquare = document.createElement('div');
//   boxSquare.className = 'box-square';
//   container.append(boxSquare);
//   let valoreLetto = document.getElementById('select-livello').value;
//   console.log(valoreLetto);
//   const listaRandom = [];
  
//   if(valoreLetto == '1'){
//     squareNumber = 100;
//     gameLevel = 'crazy';
//     for(let i = 1; i <= squareNumber; i++){
//     squareGenerator (boxSquare, listaRandom, 1, squareNumber, gameLevel);
//     }
//   }
//   else if(valoreLetto == '2'){
//     squareNumber = 81;
//     gameLevel = 'easy';
//     for(let i = 1; i <= squareNumber; i++){
//       squareGenerator (boxSquare, listaRandom, 1, squareNumber, gameLevel);
//       }
//   }
//   else if(valoreLetto == '3'){
//     squareNumber = 49;
//     gameLevel = 'hard';
//     for(let i = 1; i <= squareNumber; i++){
//       squareGenerator (boxSquare, listaRandom, 1, squareNumber, gameLevel);
//       }
//   }
//   console.log(squareNumber);
//   });
//   // -----------------------------------------------------

// // **********FUNZIONI****************


// // funzione per generare numero random
// function numRandom (num1, num2){
//   return Math.floor(Math.random() * (num2) + num1);
// }

// // funzione per sapere se un numero è pari o dispari
// function pariODispari(num){
//   if(num % 2) return 'odd';
//   return 'even';
// }

// // funzione per verificare che il numero random non sia già stato estratto
// function gererazioneUnivocaNumRandom(lista, num1, num2){
//   let number = null;
//   let valid = false;

//   while(!valid){
//     number = numRandom (num1, num2);
//     console.log(number);
//     if(!lista.includes(number)){
//       valid = true;
//       lista.push(number);
//     }
//   }
//   return number;
// }

// // generatore di square
// function squareGenerator (target, lista, num1, num2, level){
//     const sq = document.createElement('div');
//     const nR = gererazioneUnivocaNumRandom(lista, num1, num2);
//     // controllo se il numero è pari o dispari
//     const classes = ['square', pariODispari(nR), level];
//     sq.innerHTML = `<span>${nR}</span>`;
//     sq.classList.add(...classes);
//     target.append(sq);
//     return sq;
//   }


