import { Route } from "react-router";
import Result from "./Components/result";
import TestCase from "./Components/testcase";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={TestCase} />
      <Route exact path="/result" component={Result} />
    </div>
  );
}

export default App;
