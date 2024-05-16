import React from 'react';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer';
import "./css/main.css"

function App() {
  return (
    <>
      <Header />

      <ItemListContainer />
    </>
  );
}

export default App;