import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext() {
  const initialValue = 0;
  const [like, setLike] = useState(initialValue);
  const [para, setPara] = useState(false);
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    fontSize: "1.5rem",
    fontWeight: "600",
    padding: "2rem",
    margin: "2rem",
    fontFamily: "Arial",
  };

  const increaseLike = () => {
    setLike(like + 1);
  };

  const reduceLike = () => {
    setLike(like - 1);
  };
  const resetLike = () => {
    setLike(initialValue);
  };

  useEffect(() => {
    if (!para) {
      alert("Paragraph is closing.");
    } else {
      alert("Paragraph will be visible.");
    }
  }, [para]);

  const showPara = () => {
    setPara(!para);
  };

  return (
    <div style={themeStyle}>
      {para && <p>This is the Paragraph that will appear when we click show paragraph button</p>}
      <button onClick={showPara}>{para ? "Hide content" : "Show content"}</button>

      <p>{like}</p>
      <button onClick={increaseLike}>Like</button>
    </div>
  );
}

export default UseContext;
