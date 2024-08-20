import { useEffect } from "react";
function App() {
  useEffect(() => {
    const output = fetch("https://restcountries.com/v3.1/all");
    console.log(output);
  });

  return <div>App</div>;
}

export default App;
