import React, { useState, useEffect } from 'react';

function CardInfo() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const results = data?.data ?? [];

                const mappedCards = results.map((cardData) => {
                    return {
                        id: cardData.id,
                        name: cardData.name,
                        type: cardData.type,
                        desc: cardData.desc,
                        image_url: cardData.card_images[0].image_url,
                    };
                });

                setCards(mappedCards);
            } catch (error) {
                console.error('Error fetching card data:', error);
            }
        };

        fetchCards();
    }, []);

    return (
        <div className="card-grid">
            {cards.map((card) => (
                <div key={card.id} className="card">
                    <div className="cardContent">
                        <h2>{card.name}</h2>
                        <p>Type: {card.type}</p>
                        <p>Description: {card.desc}</p>
                    </div>
                    <img src={card.image_url} alt={card.name} />
                </div>
            ))}
        </div>
    );
    

}

export default CardInfo;