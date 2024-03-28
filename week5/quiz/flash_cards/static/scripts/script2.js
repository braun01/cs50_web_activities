const QUESTIONS = [
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
    }
]

function Quizzlet() {
    // parent component that will track all of our state
    // here we split up our state so we can make updates independently, which gives React more flexibility to determine re-renders
    const [currentCard, setCurrentCard] = React.useState(0);
    const [correctCards, setCorrectCards] = React.useState([]);
    const [incorrectCards, setIncorrectCards] = React.useState([]);

    // Defining React callbacks in this way helps React track the memory location of this function
    // in the event that the parent component needs to re-render for any reason
    const onCorrect = React.useCallback(() => {
        setCorrectCards([...correctCards, currentCard]); // React does not like it when we mutate arrays, so we create and update a copy
        setCurrentCard(() => currentCard + 1);
    }, [correctCards, currentCard]); // these are dependencies React will check for changes to determine what must be re-rendered

    const onIncorrect = React.useCallback(() => {
        setIncorrectCards([...incorrectCards, currentCard]);
        setCurrentCard(() => currentCard + 1);
    }, [incorrectCards, currentCard]);
    

    return (
        <div class="row">
                <div class="col-md">
                    <div class="row">
                        <h3>Correct</h3>
                        <hr />
                        <div id="correct-div">
                            {/* This is an example of how to pass state as a prop from the parent Quizzlet to the child CardList */}
                            <CardList cards={correctCards} />
                        </div>
                    </div>
                    <div class="row">
                        <h3>Incorrect</h3>
                        <hr />
                        <div id="incorrect-div">
                            <CardList cards={incorrectCards} />
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div id="card-start-div">
                        {/* onCorrect and onIncorrect are examples of callbacks defined in the parent Quizzlet that get passed to the child */}
                        {/* This pattern allows an event that is defined in the child to affect state in the parent. It is how a child can pass state back to a parent */}
                        <Prompter currentCard={currentCard} onCorrect={onCorrect} onIncorrect={onIncorrect} />
                    </div>
                </div>
            </div>
    )
}

function Card({ question, answer }) {
    const handleCardClick = React.useCallback(event => {
        // currentTarget gets us the element to which the event is bound
        event.currentTarget.classList.add("card-flip");
        event.currentTarget.onanimationend = function() {
            // "this" is still the card div
            this.classList.remove("card-flip")
        };
    });

    return (
        <div onClick={handleCardClick} class="card-ab">
            <div class="front">{question}</div>
            <div class="back">{answer}</div>
        </div>
    );

}

function CardList({ cards }) {
    if (!cards.length){
        return <ul>No cards to show</ul>;
    }

    const cardsToRender = cards.map(card => <Card question={QUESTIONS[card].question} answer={QUESTIONS[card].answer} />);
    return <ul>{cardsToRender}</ul>;
}

function Prompter({ currentCard, onCorrect, onIncorrect }) {
    // stay in bounds
    if (currentCard < 0 || currentCard >= QUESTIONS.length) {
        return (
            <div>
                Unable to render card #{currentCard + 1} or no more cards to render
            </div>
        );
    }

    return (
        <div>
            Viewing card {currentCard + 1} of {QUESTIONS.length}
            <Card question={QUESTIONS[currentCard].question} answer={QUESTIONS[currentCard].answer} />
            <button class="btn btn-success" onClick={onCorrect}>Correct</button>
            <button class="btn btn-danger" onClick={onIncorrect}>Incorrect</button>
        </div>
    );
}

if (document.readyState !== "loading"){
    ReactDOM.render(<Quizzlet />, document.querySelector(".container"));
} else {
    document.addEventListener("DOMContentLoaded", () => {
        ReactDOM.render(<Quizzlet />, document.querySelector(".container"));
    });
}
