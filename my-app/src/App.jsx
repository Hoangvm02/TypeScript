import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Item from './components/Item'

function App() {
 
  const [products, setProduct] = useState( [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" }
  ])
  const removeItem = (id) => {
    const newProducts = products.filter(item => item.id != id);
    setProduct(newProducts);
  }
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      Count : {count} <button onClick={() => setCount(count + 1)}>Click</button> <br />
      {products.map((item, index) => <div> {item.name}
        <button onClick={() => removeItem(item.id)}>Remove</button></div>
      )}
      <ShowInfo name="hoang" age={20} />
    </div>
  )
}

export default App;
