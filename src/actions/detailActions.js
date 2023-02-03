import axios from "axios";
import { gameDetailsUrl, gameScreenShotsUrl } from "../api";

// ACTION CREATOR

export const loadDetail = (id) => {
    return async (dispatch) => {
        // Fetch Axios
        const detailsData = await axios.get(gameDetailsUrl(id));
        const screenshotsData = await axios.get(gameScreenShotsUrl(id));
        dispatch({
            type: "LOAD_DETAILS",
            payload: {
                game: detailsData.data,
                screens: screenshotsData.data,
            }
        })
    }
}