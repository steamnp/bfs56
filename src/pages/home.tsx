import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home: React.FC = () => {
  // Use useSelector to get the data from the Redux store
  const items = useSelector((state: RootState) => state.data.items);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
