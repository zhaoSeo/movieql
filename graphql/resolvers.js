const zhao = {
    name : "zhao",
    age : 27,
    gender : "male"
}

const resolvers = {
    Query: {
        person: () => zhao
    }
}

export default resolvers;