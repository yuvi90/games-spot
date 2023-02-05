import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
// -->> Styles
import { GlobalStyle } from './styles'
// -->> Components & Pages
import { GameDetail, Sidebar, TopBar } from './components'
import { Home } from './pages'

//-------------------------------------------------------------|

const App = () => {

  const gameId = useLocation().pathname.split("/")[2];

  return (
    <>

      <GlobalStyle />

      <div className='main-container'>
        <Sidebar />
        <div className='content-wrapper'>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} >
              <Route
                path="/games/:id"
                element={gameId && <GameDetail gameId={gameId} />}
              />
            </Route>
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App