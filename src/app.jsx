//create a function (fuction declaration), use camelCase for function name
//firstName and lastName are the function parameters
const imgUrl = {
  img1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fflower%2F&psig=AOvVaw3",
  img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fflower%2F&psig=AOvVaw3",
  img3: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fflower%2F&psig=AOvVaw3",
};

//filter, reduce, ForEach, sort

function App() {
  return (
    <div>
      {imgUrl.map(function (imgUrl, index) {
        return <img src={imgUrl} alt="flower" key={index} />;
      })}
    </div>
  );
}

export default App;
