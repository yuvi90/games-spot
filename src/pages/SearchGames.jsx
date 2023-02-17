import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Game } from '../components'

//--------------------------------------------------|

const SearchGames = () => {

    const { searched, isLoading } = useSelector(state => state.games)

    return (
        <>
            <Outlet />
            {   
                isLoading ?
                <div className='loading'><span className="loader"></span></div> :
                <>
                    <h2>Search</h2>
                    <div className='card-grid-container'>
                        {searched.map((game) => {
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

export default SearchGames