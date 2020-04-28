import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import MuiThemaProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css';
import reducer from './reducers'

import * as serviceWorker from './serviceWorker';

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  // デバッグモードみたいなもの。本番モード時は影響しない
  <React.StrictMode>
    {/* material-uiを使用できるようにする */}
    <MuiThemaProvider>
      {/* これによりstoreを使えるようになる */}
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/events/new"/>
            <Route path="/events/:id"/>
            <Route exact path="/"/>
            <Route exact path="/events"/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </MuiThemaProvider>
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
