import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
// -->> Styles
import { GlobalStyle } from './styles'
// -->> Components & Pages
import { GameDetail, Sidebar, TopBar, Footer } from './components'
import { Home, AllGames, SearchGames } from './pages'

//-------------------------------------------------------------|

const App = () => {

  const [innerWidth, setInnerWidth] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setInnerWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    })
    return window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    })
  }, [])

  const gameId = useLocation().pathname.split("/")[2];

  return (
    <>
      <GlobalStyle />
      <TopBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div className='body-container'>
        <Sidebar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <main className='content-container'>
          <Routes>
            <Route path="/" element={<Home />} >
              <Route
                path="/games/:id"
                element={gameId && <GameDetail />}
              />
            </Route>
            <Route path="/all-games" element={<AllGames />} >
              <Route
                path="/all-games/:id"
                element={gameId && <GameDetail />}
              />
            </Route>
            <Route path="/search" element={<SearchGames />} >
              <Route
                path="/search/:id"
                element={gameId && <GameDetail />}
              />
            </Route>
          </Routes>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App