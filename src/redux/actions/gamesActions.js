import axios from "axios";
import { popularGamesUrl, newGamesUrl, upcomingGamesUrl, searchGamesUrl } from "../../api";

// ACTION CREATOR

export const loadGames = () => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_STATE",
        })
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
export const seacrchGames = (input) => {
    return async (dispatch) => {
        dispatch({
            type: "LOADING_STATE",
        })
        // Fetch Axios
        const searchData = await axios.get(searchGamesUrl(input));
        dispatch({
            type: "SEARCH_GAMES",
            payload: {
                searched: searchData.data.results,
            }
        })
    }
}