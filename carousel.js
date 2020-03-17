// seleziono tutte le card contenute nel card-container
let allCards = document.querySelectorAll('div div .card-container');
// imposto un contatore dell'indice della card
let index = 0;

// funzione che gestisce il movimento verso destra delle card
function showRight(increase) {
  // incremento l'indice
  index += increase;

  // evito che le cards escano dal range con conseguente errore
  index = Math.min(Math.max(index,0), allCards.length-1);

  // effettuo lo scroll della card
  allCards[index].scrollIntoView({behavior: 'smooth'});

  // decremento l'indice in modo da avere, nel caso si cliccasse sul btn, un successivo scroll di una card
  index -= 3;

  // funzione che gestisce quale bottone visualizzare in base alla card che si sta visualizzando
  gestioneBtn(index, allCards);

}

// funzione che gestisce il movimento verso sinistra delle card
function showLeft(increase) {
  //incremento l'indice
  index += increase;

  // evito che le cards escano dal range con conseguente errore
  index = Math.min(Math.max(index,0), allCards.length-1);

  // effettuo lo scroll della card
  allCards[index].scrollIntoView({behavior: 'smooth'});

  // funzione che gestisce quale bottone visualizzare in base alla card che si sta visualizzando
  gestioneBtn(index, allCards);

}
// variabile che seleziona il container con id = "mc"
let containerOver = document.getElementById("mc");

// aggiungo l'evento per il mouseover
containerOver.addEventListener("mouseover", function() {

  // funzione che gestisce quale bottone visualizzare in base alla card che si sta visualizzando
  gestioneBtn(index, allCards);

})

// aggiungo l'evento per il mouseout
containerOver.addEventListener("mouseout", function() {

  // tolgo la classe active al pulsante con id = "btn-r"
  document.getElementById('btn-r').classList.remove('active');

  // tolgo la classe active al pulsante con id = "btn-l"
  document.getElementById('btn-l').classList.remove('active');
})

// funzione che gestisce quale bottone visualizzare in base alla card che si sta visualizzando
function gestioneBtn(index, allCards) {

  // se l'indice è 0 visualizzo solo il btn con id = "btn-r"
  if (index == 0) {
    document.getElementById('btn-l').classList.remove('active');
    document.getElementById('btn-r').classList.add('active');
  }

  // se l'indice è maggiore di 0 e mancano ancora delle card da visualizzare mostro entrambi i btn
  else if (index > 0 && index < ((allCards.length) - 4)) {
    document.getElementById('btn-l').classList.add('active');
    document.getElementById('btn-r').classList.add('active');
  }

  // se le card da visualizzare sono terminate, nascondo il btn con id = "btn-r"e mostro il btn con id = "btn-l"
  else if (index == ((allCards.length) - 4)) {
    document.getElementById('btn-r').classList.remove('active');
    document.getElementById('btn-l').classList.add('active');
  }
}
