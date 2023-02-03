import axios from "axios";
import { popularGamesUrl, newGamesUrl, upcomingGamesUrl } from "../api";

// ACTION CREATOR

export const loadGames = () => {
    return async (dispatch) => {
        // Fetch Axios
        const popularData = await axios.get(popularGamesUrl());
        const upComingGamesData = await axios.get(upcomingGamesUrl());
        const newGamesData = await axios.get(newGamesUrl());
        dispatch({
            type: "FETCH_GAMES",
            payload: {
                popular: popularData.data.results,
                upcoming: upComingGamesData.data.results,
                newGames: newGamesData.data.results,
            }
        })
    }
}