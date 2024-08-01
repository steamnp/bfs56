const numbers = [12, 23, 32, 40]; // statement

numbers; //expression

function App() {
  return (
    <h1>
      {numbers.map(function (number) {
        console.log(number); //will execute the function 4 times
      })}
    </h1>
  );
}

export default App;
