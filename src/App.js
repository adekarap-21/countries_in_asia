import React, { useState, useEffect } from 'react';
import { GiGlobe } from 'react-icons/gi';
import { VscError } from 'react-icons/vsc';
import Country from './Components/Country';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  const url = 'https://restcountries.com/v2/continent/asia';
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <NavBar />
        <div className="loading-section">
          <GiGlobe className="loading" />
        </div>
      </main>
    );
  } else if (error) {
    return (
      <main>
        <NavBar />
        <div className="error-section">
          <VscError className="error" />
        </div>
        <Footer />
      </main>
    );
  } else {
    return (
      <main>
        <NavBar />
        <button
          onClick={() => {
            fetchData();
          }}
        >
          Refresh Data
        </button>
        <section className="container">
          {data.map((country, index) => {
            return <Country key={index} {...country} />;
          })}
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;
