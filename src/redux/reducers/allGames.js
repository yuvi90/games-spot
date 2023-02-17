const initState = {
    games: [],
    next: null,
    previous: null,
    isLoading: true,
}

// REDUCERS
const allGamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_ALL_GAMES":
            return {
                ...state,
                games: action.payload.allGames,
                next: action.payload.next,
                previous: action.payload.previous,
                isLoading: false
            }
        case "FETCH_MORE_GAMES":
            return {
                ...state,
                games: [...state.games,...action.payload.allGames],
                next: action.payload.next,
                previous: action.payload.previous,
                // isLoading: false
            }
        case "LOADING_ALL_GAMES":
            return { ...state, isLoading: true }
        default:
            return { ...state }
    }
}

export default allGamesReducer;