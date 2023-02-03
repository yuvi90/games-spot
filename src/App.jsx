import React from 'react'
import { Home } from './pages'
import GlobalStyle from './components/GlobalStyles'
import { Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <GlobalStyle />
      {/* <Route path={["/game/:id", "/"]}> */}
        <Home />
      {/* </Route> */}
    </>
  )
}

export default App