import React, { useState } from 'react';
import './App.css'
import './components/Header.css'
import './components/MedalForm.css'
import './components/Footer.css'
import './components/MedalList.css'
import Header from "./components/Header";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
import Footer from "./components/Footer";

const App = () => {
  const [countries, setCountries] = useState([]);

  const handleDelete = (id) => {
    setCountries(countries.filter(country => country.id !== id));
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <div className="medal-form">
          <MedalForm countries={countries} setCountries={setCountries} />
        </div>
        <MedalList countries={countries} onDelete={handleDelete} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default App;