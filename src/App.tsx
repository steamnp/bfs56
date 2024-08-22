import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { decrease, increase, increaseByFive } from "./redux/features/counter";
import { useGetPokemonByNameQuery } from "./redux/api/pokemon";
import { useState } from "react";
import { useRegisterNewUserMutation } from "./redux/api/user";

const intialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  mobile: "",
};

function App() {
  const counter = useAppSelector((data) => data.counter);
  const dispatch = useAppDispatch();

  const { data } = useGetPokemonByNameQuery("bulbasaur");

  const [user, setUser] = useState(intialState);
  const [error, setError] = useState("");

  const [register] = useRegisterNewUserMutation();

  console.log(user);

  function registerUser() {
    if (
      user.firstname &&
      user.lastname &&
      user.email &&
      user.password &&
      user.mobile
    ) {
      return register(user);
    } else {
      setError("Please fill all the fields");
    }
  }

  return (
    <>
      <div className="m-2 bg-gray-400 p-2">
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

        <div> Pokemon Name: {data?.name} </div>
      </div>
      <div className="m-2 bg-gray-400 p-2">
        <h1 className="text-6xl"> Create API Mutation</h1>
        <div className="flex flex-col gap-2">
          <label>
            First Name
            <input
              onChange={(e) => {
                setUser({ ...user, firstname: e.target.value });
              }}
              type="text"
              name=""
              id=""
            />
          </label>
          <label>
            Last Name
            <input
              onChange={(e) => {
                setUser({ ...user, lastname: e.target.value });
              }}
              type="text"
              name=""
              id=""
            />
          </label>
          <label>
            Email
            <input
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              type="email"
              name=""
              id=""
            />
          </label>
          <label>
            Password
            <input
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              type="password"
              name=""
              id=""
            />
          </label>
          <label>
            Mobile
            <input
              onChange={(e) => {
                setUser({ ...user, mobile: e.target.value });
              }}
              type="text"
              name=""
              id=""
            />
          </label>
          {error && <div className="text-red-500">{error}</div>}
          <button
            className="bg-green-900 text-white m-2 p-2 rounded"
            onClick={registerUser}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
