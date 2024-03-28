const incorrectCards = [];
const correctCards = [];

function Card({ question, answer}) {
    const handleCardClick = (event) => {
        // currentTarget gives you the element that actually has the event bound to it
        const front = event.currentTarget.querySelector(".front");
        const back = event.currentTarget.querySelector(".back");

        // switch up the visibility
        if (front.style.display === "block") {
            front.style.display = "none";
            back.style.display = "block";
        } else {
            front.style.display = "block";
            back.style.display = "none";
        }
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

    if (state.currentCard >= 0 && state.currentCard < state.cards.length){
        return (
            <div>
                Viewing card {state.currentCard + 1} of {state.cards.length}
                <Card question={state.cards[state.currentCard].question} answer={state.cards[state.currentCard].answer} />
                <button class="btn btn-success" data-button-type="correct" onClick={handleClick}>Correct</button>
                <button class="btn btn-danger" data-button-type="incorrect" onClick={handleClick}>Incorrect</button>
            </div>
        )
    } else {
        return (
            <div>
                Unable to render card #{state.currentCard + 1} or no more cards to render
            </div>
        )
    }

    function handleClick(event) {
        let wasCorrect = false;
        if (event.target.dataset.buttonType === "correct") {
            wasCorrect = true;
            correctCards.push(state.cards[state.currentCard]);
        } else {
            incorrectCards.push(state.cards[state.currentCard]);
        }

        // update the state by incrementing the current card and tracking correctness
        // we use map here to return a new array because React doesn't like you mutating arrays
        setState({
            cards: state.cards.map((card, index) => {
                if (index === state.currentCard) {
                    return {...card, gotCorrect: wasCorrect}
                }

                return card
            }),
            currentCard: state.currentCard + 1,
        });

        renderSeenCards();
    }
}

function renderSeenCards() {
    const incorrectComponents = incorrectCards.map(card => <Card question={card.question} answer={card.answer}/>)
    ReactDOM.render(<ul>{incorrectComponents}</ul>, document.getElementById("incorrect-div"));
    
    const correctComponents = correctCards.map(card => <Card question={card.question} answer={card.answer}/>)
    ReactDOM.render(<ul>{correctComponents}</ul>, document.getElementById("correct-div"));


}



if (document.readyState !== "loading"){
    ReactDOM.render(<Deck />, document.getElementById("card-start-div"));
}
else {
    document.addEventListener("DOMContentLoaded", () => {
        ReactDOM.render(<Deck />, document.getElementById("card-start-div"));
    });
}