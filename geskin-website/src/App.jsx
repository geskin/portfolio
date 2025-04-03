import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import NavBar from './Navigation/NavBar';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <RoutesList />
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;
