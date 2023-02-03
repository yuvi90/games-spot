const initState = {
    game: {},
}

// REDUCERS
const detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOAD_DETAILS":
            return {
                ...state,
                game: action.payload.game,
                screens: action.payload.screens,
            }
        default:
            return { ...state }
    }
}

export default detailsReducer;