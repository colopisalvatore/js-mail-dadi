// DEFINIZIONI VARIABILI
const button = document.getElementById('btn');
const div = document.querySelector(".trueEmail");
const dice = document.getElementById("dice");
const email = document.getElementById("email");

// VERIFICA EMAIL
button.addEventListener('click',
function () {
    div.innerHTML = "";
    let userEmail = document.getElementById('userEmail').value;
    let check = false;

    const allEmail = ["sara@gmail.com", "mario@gmail.com", "andrea@gmail.com", "luca@gmail.com", "luigi@gmail.com", "chiara@gmail.com",]
    console.log('allEmail', allEmail)
    // Controlliamo se l'email è presente
    for (let i = 0; i < allEmail.length; i++){
        if (userEmail == allEmail[i]){
            check = true;
        }
    } 
        if (check){ //Se è presente facciamo accedere il giocatore al gioco dei dadi
            console.log('Benvenuto');
            div.innerHTML = "Benvenuto";
            dice.style.display = "block";
            email.style.display = "none"

        } else { //Se non è presente chiediamo di registrarsi
            console.log('Registrati');
            div.innerHTML = "Registrati";

        }
    document.getElementById('userEmail').value = "";
}
)

// GIOCO DEI DADI

// Definiamo i nomi dei giocatori
	let player1 = "Player 1";
    let player2 = "Player 2";

// Cambiamo nome ai Giocatori
function editNames() {
    player1 = prompt("Cambia il nome per il Player 1");
    player2 = prompt("Cambia il nome per il Player 2");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

// Programma per far girare i dadi
function rollTheDice() {
    setTimeout(function () {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "./img/dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "./img/dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.getElementById("result").innerHTML = "Wow, Pareggio!";
        }

        else if (randomNumber1 < randomNumber2) {
            document.getElementById("result").innerHTML
                = (player2 + " Ha vinto!");
        }

        else {
            document.getElementById("result").innerHTML
                = (player1 + " Ha vinto!");
        }
    }, 2500);
}
