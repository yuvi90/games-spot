const initState = {
    popular: [],
    newGames: [],
    upComing: [],
    searched: [],
    isLoading: true,
}

// REDUCERS
const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                newGames: action.payload.newGames,
                upComing: action.payload.upcoming,
                isLoading: false
            }
        case "LOADING_STATE":
            return { ...state, isLoading: true }
        default:
            return { ...state }
    }
}

export default gamesReducer;