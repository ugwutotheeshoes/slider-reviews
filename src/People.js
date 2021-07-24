import React, { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const People = ({id, image, name, title, quote}) => {
    const [index, setIndex] = useState(0);
    return(
        <article key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
        </article>
        )
}



export default People;