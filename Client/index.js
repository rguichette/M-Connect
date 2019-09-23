// import "regenerator-runtime/runtime";

import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store , {persistor} from "./store"

import { PersistGate } from 'redux-persist/integration/react'


import App from './src/app'



ReactDOM.render(<Provider store={store}>  <App/>   </Provider>, document.getElementById('root'));
