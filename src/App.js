import { useEffect, useState } from "react";
import Accordian from "./Accordian";
import "./App.css";
import { data } from "./Data";

function App() {
  const [myData, setMyData] = useState([{ name: "", age: "", address: "" }]);

  const addIsVisibleKey = (item) => {
    item.isVisible = false;
    if (item.children) item.children.map((i) => addIsVisibleKey(i));
  };

  useEffect(() => {
    data.map((item) => addIsVisibleKey(item));
    setMyData(data);
  }, []);

  return (
    <div className="container">
      <Accordian data={myData[0]} />
    </div>
  );
}

export default App;
