import './App.css'
import React from 'react';
import store from './Redux/store'
import Router  from './Router'
import { Provider } from 'react-redux';

function App() {
 
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  )
}

export default App
