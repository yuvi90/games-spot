const initState = {
    games: [],
    isLoading: true,
}

// REDUCERS
const allGamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_ALL_GAMES":
            return {
                ...state,
                games: action.payload.allGames,
                isLoading: false
            }
        case "LOADING_ALL_GAMES":
            return { ...state, isLoading: true }
        default:
            return { ...state }
    }
}

export default allGamesReducer;