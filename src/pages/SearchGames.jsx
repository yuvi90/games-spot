import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { Game } from '../components'

//--------------------------------------------------|

const SectionDiv = styled.section`
    padding: 2rem 6rem;

    @media screen and (max-width:980px) {
        padding: 1rem 3rem;
    }

    @media screen and (max-width:650px) {
        padding: 2rem 2rem;
    }
`

const GameList = styled.div`
    .loading {
        ${(props) => props.isLoading ? "display: flex;" : null}
        ${(props) => props.isLoading ? "justify-content: center;" : null}
        ${(props) => props.isLoading ? "align-items: center;" : null}
        ${(props) => props.isLoading ? "min-height: 50vh;" : null}
    }
`

const Games = styled.div`
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

const SearchGames = () => {

    const { searched, isLoading } = useSelector(state => state.games)

    return (
        <SectionDiv>
            <Outlet />
            <GameList isLoading={isLoading} >
                <h2>Search</h2>
                {isLoading ?
                    <div className='loading'><span className="loader"></span></div> :
                    <Games>
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
                    </Games>
                }
            </GameList>
        </SectionDiv>
    )
}

export default SearchGames