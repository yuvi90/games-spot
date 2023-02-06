import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
// Components
import { Game } from '../components'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../redux/actions/gamesActions'
// Styling & Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'

//--------------------------------------------------|
// Styles

const SectionDiv = styled.section`
    padding: 2rem 6rem;

    @media screen and (max-width:980px) {
        padding: 1rem 3rem;
    }

    @media screen and (max-width:650px) {
        padding: 2rem 2rem;
    }
`

const GameList = styled(motion.div)`
    .loading {
        ${(props) => props.isLoading ? "display: flex;": null}
        ${(props) => props.isLoading ? "justify-content: center;": null}
        ${(props) => props.isLoading ? "align-items: center;": null}
        ${(props) => props.isLoading ? "min-height: 50vh;": null}
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
    }
`

//--------------------------------------------------|

const Home = () => {

    // Fetch Data
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [])
    // Get that data back
    const { popular, newGames, upComing, isLoading } = useSelector(state => state.games);

    return (
        <SectionDiv>

            <Outlet />

            <GameList isLoading={isLoading} >
                <h2>Popular Games</h2>
                {isLoading ?
                    <div className='loading'><span className="loader"></span></div> :
                    <Games>
                        {popular.map((game) => {
                            return (
                                <Game
                                    key={game.id}
                                    id={game.id}
                                    name={game.name}
                                    image={game.background_image}
                                    released={game.released}
                                    platforms={game.platforms}
                                />
                            );
                        })}
                    </Games>
                }
            </GameList>

            <GameList isLoading={isLoading} >
                <h2>New Games</h2>
                {isLoading ?
                    <div className='loading'><span className="loader"></span></div> :
                    <Games>
                        {newGames.map((game) => {
                            return (
                                <Game
                                    key={game.id}
                                    id={game.id}
                                    name={game.name}
                                    image={game.background_image}
                                    released={game.released}
                                    platforms={game.platforms}
                                />
                            );
                        })}
                    </Games>
                }
            </GameList>

            <GameList isLoading={isLoading} >
                <h2>Upcoming Games</h2>
                {isLoading ?
                    <div className='loading'><span className="loader"></span></div> :
                    <Games>
                        {upComing.map((game) => {
                            return (
                                <Game
                                    key={game.id}
                                    id={game.id}
                                    name={game.name}
                                    image={game.background_image}
                                    released={game.released}
                                    platforms={game.platforms}
                                />
                            );
                        })}
                    </Games>
                }
            </GameList>

        </SectionDiv>
    )
}

export default Home