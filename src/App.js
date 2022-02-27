import List from "./components/List";
import Menubar from "./components/Menubar";
import Orders from "./components/Orders";

function App() {
  return (
    <div className="App bg-dark h-screen overflow-hidden sm:grid sm:grid-cols-12">
      <Menubar />
      <List />
      <Orders />

     
    </div>
  );
}

export default App;
