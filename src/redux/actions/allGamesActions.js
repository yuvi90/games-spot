import axios from "axios";
import { allGamesUrl } from "../../api";

// ACTION CREATOR

export const loadAllGames = () => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_ALL_GAMES",
        })
        // Fetch Axios
        const allGamesData = await axios.get(allGamesUrl());
        dispatch({
            type: "FETCH_ALL_GAMES",
            payload: {
                allGames: allGamesData.data,
            }
        })
    }
}