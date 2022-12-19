import { useState } from "react";
import "./App.css";
import Numbers from "./components/Numbers";

function App() {
  const [numbers, setNumbers] = useState("");

  const totalNumbers = new Set();

  function randomNumbers() {
    return Math.floor(Math.random() * (36 - 5 + 1)) + 5;
  }

  while (totalNumbers.size !== 5) {
    totalNumbers.add(randomNumbers());
  }

  const array = Array.from(totalNumbers);

  function sortNumbers(array) {
    return array.sort((a, b) => a - b);
  }

  let sortResultNumbers = sortNumbers(array);

  const handleClick = () => setNumbers(sortResultNumbers);

  return (
    <div className="App">
      <img
        className="loto-image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lotto.svg/1200px-Lotto.svg.png"
        alt="lottery text"
      />
      <button className="new-button" onClick={handleClick}>New numbers</button>
      <Numbers numbers={numbers} />
    </div>
  );
}

export default App;