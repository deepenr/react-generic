import "./App.css";
import { Button } from "./Component/Button";

function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("this is your button");
        }}
        type="button"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        {" "}
        Click me
      </Button>
    </div>
  );
}

export default App;
