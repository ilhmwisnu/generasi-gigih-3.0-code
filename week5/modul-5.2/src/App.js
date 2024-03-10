import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CurrenConverter from "./view/currency_converter";
import WeighConverter from "./view/weight_converter";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/money">Money</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <WeighConverter></WeighConverter>
        </Route>
        <Route exact path="/money">
          <CurrenConverter></CurrenConverter>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
