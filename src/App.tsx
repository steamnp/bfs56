import useFetch from "./useFetch";
const apiUrl = "https://restcountries.com/v3.1/all";

function App() {
  const { countries, loading } = useFetch(apiURL);

  return loading ? (
    <div>Loading....</div>
  ) : (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <h1>{country.name.common}</h1>
          <img src={country.flags.png} alt={country.name.common} />
        </div>
      ))}
    </div>
  );

export default App;
