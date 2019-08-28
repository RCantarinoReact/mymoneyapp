import React from 'react'
import ReactDOM from 'react-dom'

//redux
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//mid para esperar a promise ficar disponivel
import promise from 'redux-promise'

//mid para multiplas chamadas no action
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()



const elemento = document.getElementById('app')
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
    , elemento)


    //cria o root redux
    // no index cria os imports, criar a store
    // envolve o app no Provider