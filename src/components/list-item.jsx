import data from "../../data.json";
import Items from "./items";

function ListItem() {
  return (
    <>
      {data.map((product, index) => (
        <Items product={product} key={index} />
      ))}
    </>
  );
}

export default ListItem;
