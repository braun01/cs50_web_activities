const incorrectCards = [];
const correctCards = [];

function Card({ question, answer}) {
    const handleCardClick = (event) => {
        // TODO: hide the "front" text and show the "back" text
    }

    return (
        <div onClick={handleCardClick} class="card-ab">
            <div class="front">{question}</div>
            <div class="back">{answer}</div>
        </div>
    )

}

function Deck() {
    const [state, setState] = React.useState({
        cards: [
            {
                id: 0,
                question: "What day is it?",
                answer: "Today",
                gotCorrect: undefined
            },
            {
                id: 1,
                question: "Is Millie a dog?",
                answer: "Yup",
                gotCorrect: undefined
            },
            {
                id: 2,
                question: "What color do red and yellow make?",
                answer: "Orange",
                gotCorrect: undefined
            },
            {
                id: 3,
                question: "If a tree falls in the woods, etc etc.?",
                answer: "Who's to say",
                gotCorrect: undefined
            },
            {
                id: 4,
                question: "Are blueberries really blue?",
                answer: "No",
                gotCorrect: undefined
            },
        ],
        currentCard: 0
    });

    // stay in bounds
    if (state.currentCard >= 0 && state.currentCard < state.cards.length){
        // TODO: render a deck of cards here and some buttons
        return (
            <div>TODO: render a deck of cards here and some buttons</div>
        )
    } else {
        return (
            <div>
                Unable to render card #{state.currentCard + 1} or no more cards to render
            </div>
        )
    }

    function handleClick(event) {
        // TODO: update state appropriately depending on the button clicked
        // push the card into teh correctponding global correct/incorrectCards arrays
        // render the new card arrays
    }
}

function renderSeenCards() {
    const incorrectComponents = incorrectCards.map(card => <Card question={card.question} answer={card.answer}/>)
    ReactDOM.render(<ul>{incorrectComponents}</ul>, document.getElementById("incorrect-div"));
    
    const correctComponents = correctCards.map(card => <Card question={card.question} answer={card.answer}/>)
    ReactDOM.render(<ul>{correctComponents}</ul>, document.getElementById("correct-div"));}



if (document.readyState !== "loading"){
    console.log("document already loaded");
    ReactDOM.render(<Deck />, document.getElementById("card-start-div"));
} else {
    document.addEventListener("DOMContentLoaded", () => {
        ReactDOM.render(<Deck />, document.getElementById("card-start-div"));
    });
}