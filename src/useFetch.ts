import { useState, useEffect } from "react";

function useFetch(url) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return { countries, loading };
}

export default useFetch;
