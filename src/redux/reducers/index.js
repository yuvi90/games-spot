import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import detailsReducer from './detailsReducer'
import allGamesReducer from './allGames'

const rootReducer = combineReducers({
    games: gamesReducer,
    details: detailsReducer,
    all_games: allGamesReducer,
})

export default rootReducer; 
