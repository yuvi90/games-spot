import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Game } from '../components'
// Redux
import { loadAllGames, loadMoreGames } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

//--------------------------------------------------|

const AllGames = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllGames());
  }, []);

  const { games, isLoading, next } = useSelector(state => state.all_games)

  const loadMoreData = () => {
    if (next != null) {
      dispatch(loadMoreGames(next));
    }
  }

  return (
    <>
      <Outlet />
      {isLoading ?
        <div className='loading'><span className="loader"></span></div> :
        <>
          <h2>All Games</h2>
          <div className='card-grid-container'>
            {games.map((game) => {
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
          {next && <button className='load-btn' onClick={loadMoreData}>Load More</button>}
        </>
      }
    </>
  )
}

export default AllGames