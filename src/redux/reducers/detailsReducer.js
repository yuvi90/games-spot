const initState = {
    game: {},
    isLoading: true,
}

// REDUCERS
const detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOAD_DETAILS":
            return {
                ...state,
                game: action.payload.game,
                screens: action.payload.screens,
                isLoading: false,
            }
        case "LOADING_STATE":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return { ...state }
    }
}

export default detailsReducer;