import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { decrease, increase, increaseByFive } from "./redux/features/counter";

function App() {
  return <div>App</div>;
  const counter = useAppSelector((data) => data.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="text-6xl">{counter}</h1>
      <button
        onClick={() => dispatch(increase())}
        className="bg-green-900 text-white m-2 p-2 rounded"
      >
        Increase Counter
      </button>
      <button
        onClick={() => dispatch(decrease())}
        className="bg-green-900 text-white m-2 p-2 rounded"
      >
        Decrease Counter
      </button>

      <button
        onClick={() => dispatch(increaseByFive(5))}
        className="bg-green-900 text-white m-2 p-2 rounded"
      >
        Increase by 5
      </button>
    </>
  );
}

export default App;
