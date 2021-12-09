import { getPopular, getTop } from './services.js';
import renderCards from './renderCards.js';
import elements from './elements.js';

const triggerNav = event => {
    const target = event.target.closest('.get-nav__link');

    if (target) {
        event.preventDefault();
        elements.filmWeek.style.display = 'none';
        elements.title.textContent = target.textContent;

        if (target.classList.contains('get-nav__link_popular-movies')) {
            getPopular('movie')
            .then(data => renderCards(data.results));
        }

        if (target.classList.contains('get-nav__link_top-tv')) {
            getTop('tv')
            .then(data => renderCards(data.results));
        }

        if (target.classList.contains('get-nav__link_popular-tv')) {
            getPopularTv('tv')
            .then(data => renderCards(data.results));
        }

        if (target.classList.contains('get-nav__link_top-movies')) {
            getTopMovie('movie')
            .then(data => renderCards(data.results));
        }

        if (target.classList.contains('get-nav__link_triends')) {
            getTrends('all')
            .then(data => renderCards(data.results));
        }
    }; 
};


(() => {
    elements.getNav.forEach(nav => {
        nav.addEventListener('click', triggerNav);
    })
})();
