import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Showinfo from "./components/Showinfo";
import type { ProductType} from './types/product'
function App() {
  const [info, setinfo] = useState <ProductType>({
    name: "hoang",
    age: 20
  });
    

  return (
    <div className="App">
      <Showinfo info={info}/>
    </div> 
  );
}
export default App;
