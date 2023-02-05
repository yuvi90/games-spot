// Base URL
const API = "45f656bed3fb41faa61589575732e595";
const base_url = 'https://api.rawg.io/api/';

// Getting the date
const getCurrentday = () => {
    const date = new Date().getDate();
    if (date < 10) {
        return `0${date}`;
    } else {
        return date;
    }
}
// Getting the month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}
// Getting the year
const getCurrentYear = () => {
    return new Date().getFullYear();
}

const currentDate = getCurrentday();
const currentMonth = getCurrentMonth();
const currentYear = getCurrentYear();
const fullDate = `${currentYear}-${currentMonth}-${currentDate}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDate}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDate}`;
//Popular
const popularGames = `games?key=${API}&dates=${lastYear},${fullDate}&ordering=-rating&page_size=10`
const upcomingGames = `games?key=${API}&dates=${fullDate},${nextYear}&ordering=-added&page_size=10`
const newGames = `games?key=${API}&dates=${lastYear},${fullDate}&ordering=-released&page_size=10`

export const popularGamesUrl = () => `${base_url}${popularGames}`;
export const upcomingGamesUrl = () => `${base_url}${upcomingGames}`;
export const newGamesUrl = () => `${base_url}${newGames}`;
// Detail
export const gameDetailsUrl = (gamesID) => `${base_url}games/${gamesID}?key=${API}`;
export const gameScreenShotsUrl = (gamesID) => `${base_url}games/${gamesID}/screenshots?key=${API}`;