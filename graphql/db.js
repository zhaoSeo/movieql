export const people = [
    {
        id : "0",
        name : "zhao",
        age : 27,
        gender : "male"
    },
    {
        id : "1",
        name : "hejoo",
        age : 33,
        gender : "female"
    },
    {
        id : "2",
        name : "jinho",
        age : 17,
        gender : "male"
    },
    {
        id : "3",
        name : "hewon",
        age : 21,
        gender : "female"
    },
    {
        id : "4",
        name : "jihoon",
        age : 20,
        gender : "male"
    },
    {
        id : "5",
        name : "nayong",
        age : 18,
        gender : "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}