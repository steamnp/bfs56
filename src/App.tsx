import useFetch from "./useFetch";

function App() {
  const { data, error };
  return countries.length < 0 ? (
    <div>Loading...</div>
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
}

export default App;
