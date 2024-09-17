

let caselle= document.getElementsByClassName("casella")



let turnogiocatore=1

let labelGiocatore=document.getElementById("labelGiocatore")
labelGiocatore.innerText="turno del giocatore rosso"
labelGiocatore.classList.add("text-danger")

function game(){

        for(let i=0; i<caselle.length; i++){
            caselle[i].addEventListener("click", function () {
                clickedCasella(caselle[i])
            });
            
        }

}

function clickedCasella(casella){
    
    if(controlloCasella(casella)){
        if(turnogiocatore==1){
            casella.classList.add("bg-danger")
            turnogiocatore=2
            labelGiocatore.innerText="turno del giocatore blu"
            labelGiocatore.classList.remove("text-danger")
            labelGiocatore.classList.add("text-primary")


        }
        else{
            casella.classList.add("bg-primary")
            turnogiocatore=1
            labelGiocatore.innerText="turno del giocatore rosso"
            labelGiocatore.classList.remove("text-primary")
            labelGiocatore.classList.add("text-danger")


        }
    }    

}

function controlloCasella(casella){
    return !(casella.classList.contains("bg-danger") || casella.classList.contains("bg-primary"))
}


game()

