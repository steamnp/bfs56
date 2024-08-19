import { useEffect } from "react";

const apiURL = "https://restcountries.com/v3.1/all";

function app() {
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((anotherRes) => console.log(anotherRes))
      .catch((error) => console.log(error.message));
  });

  return <>Loading....</>;
}

export default app;
