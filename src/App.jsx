import "./App.css";
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";
import { useState } from "react";

export function App() {
  const [score, setScore] = useState(0);
  const [picks, setPicks] = useState([]);

  const testPick = (n) => {
    const alreadyPicked = picks.some((p) => p === n);
    if (alreadyPicked) {
      setScore(0);
      setPicks([]);
    } else {
      setScore(score + 1);
      setPicks([...picks, n]);
    }
  };

  return (
    <div className="bg-neutral-800">
      <Header score={score}></Header>
      <main className="max-w-6xl w-full m-auto">
        <Cards testPick={testPick}></Cards>
      </main>
    </div>
  );
}

export default App;
