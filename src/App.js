import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer'

function App() {

  const users = [
    {
      name: 'Zamir',
      lastName: 'Niyazaliev',
      age: 26,
      id: Date.now()
    },
    {
      name: 'Sanat',
      lastName: 'Abdrasulov',
      age: 23,
      id: Date.now()
    },
    {
      name: 'Urmat',
      lastName: 'Bakytbekov',
      age: 26,
      id: Date.now()
    },
    {
      name: 'Zhibek',
      lastName: 'Abdykalykova',
      age: 27,
      id: Date.now()
    },
    {
      name: 'Isken',
      lastName: 'Sagynbekov',
      age: 21,
      id: Date.now()
    }
  ]

  return (
    <>
      <Header/>
      <Section users={users}/>
      <Footer/>
    </>
  );
}

export default App;
