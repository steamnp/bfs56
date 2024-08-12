import ListItem from "../component/list-item";

function Home() {
  return (
    <>
      <main className="m-6 sm:m-10 md:mx-28 md:my-22">
        <h1 className="text-2xl font-bold mb-8">Desserts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ListItem />
        </div>
      </main>
    </>
  );
}

export default Home;
