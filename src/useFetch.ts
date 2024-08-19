import { useEffect, useState } from "react";

const apiUrl = "https://restcountries.com/v3.1/all";

function useFetch(url) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data))
        setData(data);
        setLoading(false);
  })
      .catch((error) => {
        setError(error.message);
      });
 }, []);
    
      return { data, loading, error };
}

export default useFetch;
