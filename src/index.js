import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import todoReducer from './reducer'

let store = createStore(todoReducer)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)


serviceWorker.unregister();
