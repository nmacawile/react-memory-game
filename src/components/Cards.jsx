import Card from "./Card.jsx";
import { useState, useEffect } from "react";

export function Cards({ testPick }) {
  const [numbers, setNumbers] = useState([]);
  const [locked, setLocked] = useState(false);

  const generateRandomNumbers = () => {
    let _numbers = [];
    for (let n = 0; n < 12; n++) {
      _numbers.push(Math.ceil(Math.random() * 151));
    }
    setNumbers(_numbers);
  };

  const pick = (n) => {
    if (locked) return;
    setLocked(true);
    testPick(n);
    setTimeout(() => {
      generateRandomNumbers();
      setLocked(false);
    }, 700);
  };

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  return (
    <div className="overflow-hidden p-2 md:p-4 lg:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
      {numbers.map((n, i) => (
        <Card
          pick={() => pick(n)}
          locked={locked}
          key={`card-${i}-${n}`}
          number={n}
        />
      ))}
    </div>
  );
}

export default Cards;
