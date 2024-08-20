import useFetchCountries from "./useFetch"; // Import the custom hook
function App() {
  const { countries, error, loading } = useFetchCountries(); // Use the custom hook

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return countries.length === 0 ? (
    <div>No countries found</div>
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
