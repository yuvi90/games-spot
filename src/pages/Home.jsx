import React, { useEffect } from 'react'
import { Game, GameDetail } from '../components'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesActions'
// Styling & Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'

const GameList = styled(motion.div)`
    padding: 0 5rem;
    
    h2 {
        padding: 4rem 0;
    } 
`
const Games = styled(motion.div)`
    cursor: pointer;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`


const Home = () => {

    // Fetch Data
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch])
    // Get that data back
    const { popular, newGames, upComing } = useSelector(state => state.games);

    return (
        <>
            {/* <GameDetail /> */}
            <GameList>
                <h2>Upcoming Games</h2>
                <Games>
                    {upComing.map((game) => {
                        return (
                            <Game
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                image={game.background_image}
                                released={game.released}
                            />
                        );
                    })}
                </Games>
            </GameList>

            <GameList>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map((game) => {
                        return (
                            <Game
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                image={game.background_image}
                                released={game.released}
                            />
                        );
                    })}
                </Games>
            </GameList>

            <GameList>
                <h2>New Games</h2>
                <Games>
                    {newGames.map((game) => {
                        return (
                            <Game
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                image={game.background_image}
                                released={game.released}
                            />
                        );
                    })}
                </Games>
            </GameList>
        </>
    )
}

export default Home