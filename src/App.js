import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="space-y-4">
      <Navbar />
      <AddEmployee />
    </div>
  );
}

export default App;
