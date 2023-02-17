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
                allGames: allGamesData.data.results,
                next: allGamesData.data.next,
                previous: allGamesData.data.previous,
            }
        })
    }
}

export const loadMoreGames = (url) => {
    return async (dispatch) => {
        // dispatch({
        //     type: "LOADING_ALL_GAMES",
        // })
        // Fetch Axios
        const MoreGamesData = await axios.get(url);
        dispatch({
            type: "FETCH_MORE_GAMES",
            payload: {
                allGames: MoreGamesData.data.results,
                next: MoreGamesData.data.next,
                previous: MoreGamesData.data.previous,
            }
        })
    }
}