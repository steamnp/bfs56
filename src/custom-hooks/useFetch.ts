import {useEffect, useState} from 'react'

function useFetch(url) {
    const [data, setData] = useState({});
    const [error, setError] = useState("");
  
    useEffect(() => {
      
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);
    return  {data, error}

}

export default useFetch;