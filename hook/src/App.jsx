import React, { useState } from "react";
import "./App.css";
import UseContext2 from "./componets/UseContext";
// import Progressions from "./componets/UseState"
export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((state) => !state);
  };

  return (
    <>
      {/* <Progressions/> */}
      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <UseContext2 />
      </ToggleTheme.Provider>
    </>
  );
}

export default App;
