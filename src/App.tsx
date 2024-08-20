import { useEffect, useState } from "react";
import useFetch from "./custom-hooks/useFetch";

function App() {
  const { data, error } = useFetch("https://restcountries.com/v3.1/all");
  if (error) return <div>Error: {error}</div>;
  return data.length < 0 ? (
    <div>Loading...</div>
  ) : (
    <div>{JSON.stringify(data)}</div>
  );
}

export default App;
