import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
// -->> Styles
import { GlobalStyle } from './styles'
// -->> Components & Pages
import { GameDetail, Sidebar, TopBar, Footer } from './components'
import { Home } from './pages'

//-------------------------------------------------------------|

const App = () => {
  
  const [isMobileView, setMobileView] = useState(false);
  const [innerWidth, setInnerWidth] = useState(null);
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
      <div className='main-container'>
        <TopBar />
        {innerWidth > 980 ?
          <Sidebar />
          : null
        }
        <main className='content-wrapper'>
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} >
                <Route
                  path="/games/:id"
                  element={gameId && <GameDetail gameId={gameId} />}
                />
              </Route>
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App