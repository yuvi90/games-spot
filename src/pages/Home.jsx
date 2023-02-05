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

const SectionDiv = styled.section`
    padding: 2rem 3rem;

    @media screen and (max-width:650px) {
        padding: 1rem 2rem;
    }
`

const GameList = styled(motion.div)`
    margin-top: 2rem;
    @media screen and (max-width:650px) {
        margin-top: 1rem;
    }
`
const Games = styled(motion.div)`
    margin: 3rem 0;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;

    @media screen and (max-width:650px) {
        grid-template-columns: repeat(1, minmax(250px, 1fr));
        margin-top: 1rem;
    }
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
        <SectionDiv>

            <AnimateSharedLayout type='crossfade'>
                
                <AnimatePresence>
                    <Outlet />
                </AnimatePresence>
                
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

            </AnimateSharedLayout>

        </SectionDiv>
    )
}

export default Home