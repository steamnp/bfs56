import React, { useEffect, useState } from "react";

// Make sure to use the correct API URL
const apiUrl = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <h1>{country.name.official}</h1>
          <img src={country.flags.png} alt="flag" />
        </div>
      ))}
    </div>
  );
}

export default App;
