import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Poster from "./components/Poster/Poster";
import Capsule from "./components/Capsule/Capsule";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Poster />
      <Capsule />
    </div>
  );
}

export default App;
