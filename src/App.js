import './App.css';
// Headerコンポーネントをimportする
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import React, { Component }  from 'react';

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
