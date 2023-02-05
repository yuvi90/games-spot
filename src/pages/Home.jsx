import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
// Components
import { Game } from '../components'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../redux/actions/gamesActions'
// Styling & Animation
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

//--------------------------------------------------|
// Styles

const GameList = styled(motion.div)`
    /* margin-top: 3rem; */
    padding: 0 4rem;
    `
const Games = styled(motion.div)`
    padding: 4rem 0;
    cursor: pointer;
    min-height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); */
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    `


//--------------------------------------------------|

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
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence><Outlet /></AnimatePresence>
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
            </AnimateSharedLayout>
        </>
    )
}

export default Home