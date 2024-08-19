import { useEffect, useState } from "react";
const apiUrl = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(countries);
  //calling data type
  //useEffect()
  //useEffect is a hook
  //empty dependency array means it will run only once
  useEffect(() => {
    // console.log("Inside useEffect hook");
    //synchronous
    //how to consume promise or get response out of promise
    //-> then method
    //->async await
    fetch(apiUrl)
      //res.jason is also a promise which returns another promise.
      //so we can use another then method to get the response out of it.
      //fetch is a promise
      //fetch returns a promise
      //fetch is a function
      //res.json() converts json data to javascript object
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return countries.length < 0 ? (
    <div>Loading...</div>
  ) : (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <h1>{country.name.common}</h1>
          <h2>{country.capital}</h2>
          <h3>{country.region}</h3>
          <img src={country.flags.png} alt={country.name.common} />
        </div>
      ))}
    </div>
  );
}

export default App;
