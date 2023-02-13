import React from 'react'
import ReactDOM from 'react-dom/client'
//-->> Components
import App from './App'
//-->> Router
import { BrowserRouter } from 'react-router-dom'

//-->> Redux Config
import { legacy_createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

//--------------------------------------------------------------------|

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)