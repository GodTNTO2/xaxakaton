import './App.css'
import store from './Redux/store'
import Router  from './Router'
import { Provider } from 'react-redux';
import React from "react";

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
