import "./App.css";
import Languages from "./component/Languages";
import LayoutHead from "./component/Layout";
import Main from "./component/front";

function App() {
  return (
    <div className="App">
      <LayoutHead />
      <Main />
      <Languages />
    </div>
  );
}

export default App;
