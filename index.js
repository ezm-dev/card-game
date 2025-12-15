let deckId

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}
function handleDraw(){
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
           // console.log(data.cards)
            document.getElementById("cards").innerHTML = `
                <img src=${data.cards[0].image} />
                <img src=${data.cards[1].image} />
            ` 
          const result = compareCards(data.cards[0],data.cards[1])
          document.getElementById("result").innerHTML= result
          document.getElementById("count").textContent =`Remaining Cards: ${data.remaining}`

          

        })


}

document.getElementById("new-deck").addEventListener("click", handleClick)
document.getElementById("draw-cards").addEventListener("click", handleDraw)



// compare 2 cards

function compareCards(card1, card2){
  let value1= card1.value
  let value2= card2.value 
value1 = value1=="JACK"?11:value1=="QUEEN"?12:value1=="KING"?13:value1=="ACE"?100:Number(value1)
value2 = value2=="JACK"?11:value2=="QUEEN"?12:value2=="KING"?13:value2=="ACE"?100:Number(value2)
let  result = value1>value2?"Card1 wins!":value1<value2?"Card2 wins!":"It's a tie!"
return result

 
}
    