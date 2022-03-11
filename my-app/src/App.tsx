import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  type TProduct = {
    id: number;
    name: string;
  };
  function App() {
    const [count, setCount] = useState<number>(0);
    const [products, setProducts] = useState<TProduct[]>([
      { id: 1, name: "hoang" },
    ]);
  }
  return (
    <div className="App">
      <Showinfo />
    </div> 
  );
}

export default App;
