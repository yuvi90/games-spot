import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
// -->> Styles
import { GlobalStyle } from './styles'
// -->> Components & Pages
import { GameDetail, Sidebar, TopBar, Footer } from './components'
import { Home } from './pages'

//-------------------------------------------------------------|

const App = () => {

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
      <TopBar />
      
      <div className='main-container'>
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
                  element={gameId && <GameDetail />}
                />
              </Route>
            </Routes>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default App