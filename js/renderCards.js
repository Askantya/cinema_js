import elements from './elements.js';

const createCard = item => {
    const card = document.createElement('li');
    card.className = 'other-films__item';

    const link = document.createElement('a');
    link.className = 'other-films__link';
    if (item.vote_average) link.dataset.rating = item.vote_average;

    const img = document.createElement('img');
    img.className = 'other-films__img';
    img.alt = `постер ${item.title || item.name}`;
    img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;

    link.append(img);
    card.append(link);

    return card;
};

const renderCards = async (data) => {
    elements.listCard.textContent = '';
    
    const cards = data.map(createCard);

    elements.listCard.append(...cards);
};

export default renderCards;