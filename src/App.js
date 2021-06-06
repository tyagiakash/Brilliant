import AppNavbar from "./components/appNavbar";
import { Redirect, Route, Switch } from "react-router-dom";
import Puzzles from "./components/puzzles";
import Home from "./components/home";
import "./App.css";

function App() {
  return (
    <>
      <AppNavbar user={false} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/puzzle/:title/:id" component={Puzzles} />
        <Route path="puzzle/" component={Puzzles} />
        <Redirect from="/" exact to="/home" />
      </Switch>
    </>
  );
}

export default App;
