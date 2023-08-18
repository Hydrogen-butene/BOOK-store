import React from 'react';
import './App.css';
import Header from './componenets/Header';
import { Route, Routes } from 'react-router-dom';
import Home from "./componenets/Home.js"
import AddBook from './componenets/AddBook';
import Books from './componenets/Book/Books';
import About from './componenets/About';
import BoookDetail from './componenets/Book/BoookDetail';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path = "/" element={<Home/>} exact/>
          <Route path ="/add" element={<AddBook/>} exact/>
          <Route path ="/books" element={<Books/>} exact/>
          <Route path ="/about" element={<About/>} exact/>
          <Route path ="/books/:id" element={<BoookDetail/>} exact/>
        </Routes>
      </main>
    </React.Fragment>
    
  );
}

export default App;
