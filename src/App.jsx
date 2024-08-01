const numbers = [1, 2, 3, 4]; //statement

const imgUrl = [
  "https://plus.unsplash.com/premium_vector-1722176772341-88058b452488?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_vector-1722176772341-a6904386c910?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_vector-1722151898030-5a2d2538d1ed?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
];

numbers; //expression

//console.log(imgUrl);

function App() {
  return (
    <div>
      {imgUrl.map(function (imgUrl, index) {
        return <img key={index} src={imgUrl} />;
      })}
    </div>
  );
}

export default App;
