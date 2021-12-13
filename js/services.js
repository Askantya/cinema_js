const apiKey = '85d1b3bc3a7cca1b0b013b40336eb085';
const baseUrl = 'https://api.themoviedb.org/3/';
const language = '&language=ru-RU';

const getData = url =>  fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw `Что-то пошло не так, ошибка ${response.status}`
    })
    .catch(err => console.error(err));


export const getTriends = async (type = 'all', period = 'week', page = '1') => {
    const url = `${baseUrl}trending/${type}/${period}?api_key=${apiKey}${language}&page=${page}`;
    return await getData(url);
}

export const getTop = async (type, page = 1) => {
    const url = `${baseUrl}${type}/top_rated?api_key=${apiKey}${language}&page=${page}`;
    return await getData(url);
};

export const getPopular = async (type, page = 1) => {
    const url = `${baseUrl}${type}/popular?api_key=${apiKey}${language}&page=${page}`;
    return await getData(url);
};

export const getVideo = async (id, type) => {
    const url = `${baseUrl}${type}/${id}/videos?api_key=${apiKey}${language}`;
    return await getData(url);
};

export const search = async (query, page) => {
    const url = `${baseUrl}search/multi?api_key=${apiKey}${language}&page=${page}&include_adult=false&query=${query}`;
    return await getData(url);
};