import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
// Components
import { Game } from '../components'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../redux/actions/gamesActions'

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
        <>
            <Outlet />
            {   
                isLoading ?
                <div className='loading'><span className="loader"></span></div> :
                <>
                    <h2>Popular Games</h2>
                    <div className='card-grid-container'>
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
                    </div>

                    <h2>New Games</h2>
                    <div className='card-grid-container'>
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
                    </div>

                    <h2>Upcoming Games</h2>
                    <div className='card-grid-container'>
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
                    </div>
                </>
            }
        </>
    )
}

export default Home