import Card from "./Card.jsx";
import { useState, useEffect } from "react";

export function Cards({ testPick }) {
  const [numbers, setNumbers] = useState([]);

  const generateRandomNumbers = () => {
    let _numbers = [];
    for (let n = 0; n < 12; n++) {
      _numbers.push(Math.ceil(Math.random() * 151));
    }
    setNumbers(_numbers);
  };

  const pick = (n) => {
    generateRandomNumbers();
    return testPick(n);
  };

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  return (
    <div className="p-2 lg:p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 lg:gap-4">
      {numbers.map((n, i) => (
        <Card pick={() => pick(n)} key={`card-${i}`} number={n} />
      ))}
    </div>
  );
}

export default Cards;
