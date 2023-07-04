import "./App.scss";
import { Outlet } from "react-router-dom";
import Menu from "./menu/menu";
import Stars from "./animations/stars/star";

function App() {
  return (
    <div className="App">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
