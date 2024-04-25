import { Sidebar, Navbar, LeftColumn, RightColumn } from "./components";

const App = () => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="relative flex flex-col flex-1">
        <Navbar />
        <div className="grid w-full grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
