let cards = [
    {front: "Hola", back: "Hello"},
    {front: "¿Cómo te llamas?", back: "What is your name?"},
    {front: "¿Cómo estás?", back: "How are you?"},
    {front: "Me llamo", back: "My name is"},
    {front: "Estoy bien", back: "I'm good"},
    {front: "Estoy mal", back: "I'm bad"}
];

let currentCard = 0;

function showCard(cardIndex) {
    let card = document.getElementById("card");
    let front = card.querySelector(".front");
    let back = card.querySelector(".back");
    
    front.textContent = cards[cardIndex].front;
    back.textContent = cards[cardIndex].back;
    card.classList.remove("flip");
}

function nextCard() {
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
}

document.getElementById("card").addEventListener("click", function() {
    this.classList.toggle("flip");
});

// Initialize with the first card
showCard(currentCard);
