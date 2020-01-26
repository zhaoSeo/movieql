let movies = [
    {
        id : "0",
        name : "zhao",
        score : 27
    },
    {
        id : "1",
        name : "hejoo",
        score : 33
    },
    {
        id : "2",
        name : "jinho",
        score : 17
    },
    {
        id : "3",
        name : "hewon",
        score : 21
    },
    {
        id : "4",
        name : "jihoon",
        score : 20
    },
    {
        id : "5",
        name : "nayong",
        score : 18
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}

export const deleteMovie = (id)  => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));
    if(movies.length >= cleanedMovies.length) {
        movie = cleanedMovies;
        return true;
    } else {
        return false;
    }
}