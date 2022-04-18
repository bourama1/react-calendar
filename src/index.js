import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import './index.css';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'

const middleware = []
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

registerServiceWorker()