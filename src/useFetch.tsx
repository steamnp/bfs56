import { useState, useEffect } from "react";
const apiUrl = "https://restcountries.com/v3.1/all";

function useFetchCountries() {
  // State for countries data
  const [countries, setCountries] = useState<
    {
      name: { common: string };
      capital: string[];
      region: string;
      flags: { png: string };
    }[]
  >([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { countries, error, loading };
}

export default useFetchCountries;
