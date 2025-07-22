import React from "react";
// import "./card.css";

const cards = [
    {
        title: "1",
        description: "This is the first card.",
    },
    {
        title: "2",
        description: "This is the second card.",
    },
    {
        title: "3",
        description: "This is the third card.",
    },
    
];

function Card() {
    return (<>
            <h1>CARDs</h1>
        <div className="card-container">
            {cards.map((card, idx) => (
                <div className="card" key={idx}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
            </>
    );
}

export default Card;