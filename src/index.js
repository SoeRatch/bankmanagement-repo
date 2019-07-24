import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import WebFont from 'webfontloader';
import App from './App';
import rootReducer from './rootReducer';

WebFont.load({
  google: {
    families: ['Alegreya Sans SC', 'sans-serif','Amiri',
     'serif','Indie Flower', 'cursive','verdana',
     'Montserrat','Anton'
    ]
  }
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App}/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}