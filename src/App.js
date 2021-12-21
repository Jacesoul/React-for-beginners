import { useState, useEffect } from "react";

function Hello() {
  const effectFn = () => {
    console.log("Created!!!");
    return destroyedFn; // Cleanup Function
  };
  const destroyedFn = () => {
    console.log("destroyed :(");
  };
  useEffect(effectFn, []);
  return <h1>Hello</h1>;

  /*
  useEffect(() => {
    console.log("hello :)");
    return console.log("bye :("); // Cleanup Function
  }, []);
  */
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
