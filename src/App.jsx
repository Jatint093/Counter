import { useState } from "react";

function App() {
let [counter, setCounter] = useState(5)
const addValue = () => {
  if(counter < 20)
  setCounter(counter + 1)
}
const subtractValue = () => {
  if(counter > 0)
setCounter(counter - 1)
}
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick = {subtractValue}>Minus value</button>

    </>
  )
}

export default App
