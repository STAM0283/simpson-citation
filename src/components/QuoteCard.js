import React from 'react';
import './QuoteCard.css';

function QuoteCard ({citation}) {
    
        return (
            <div className="QuoteCard">
                <img src={citation.image} alt={citation.character} />
                <div>
                    <p>{citation.quote}</p>
                    <p>
                        <cite>{citation.character}</cite>
                    </p>
                </div>
            </div>
        );
}

export default QuoteCard;