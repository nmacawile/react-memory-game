import Card from "./Card.jsx";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "../features/score/scoreSlice";
import { push, clear } from "../features/picks/picksSlice";
import { show } from "../features/modal/modalSlice";
import {
  TOTAL_NUMBER_OF_CARDS,
  NUMBER_OF_CARDS_DRAWN,
} from "../config/AppConfig";

export function Cards() {
  const [numbers, setNumbers] = useState([]);
  const [locked, setLocked] = useState(true);

  const dispatch = useDispatch();
  const score = useSelector((state) => state.score.value);
  const picks = useSelector((state) => state.picks.value);
  const { picked, unpicked } = picks;

  const generateCards = () => {
    let _numbers = generateRandomNumbers();
    _numbers = insertNonLosingNumber(_numbers);
    setNumbers(_numbers);
  };

  const generateRandomNumbers = () => {
    let _numbers = [];
    for (let n = 0; n < NUMBER_OF_CARDS_DRAWN; n++) {
      _numbers.push(Math.ceil(Math.random() * TOTAL_NUMBER_OF_CARDS));
    }
    return _numbers;
  };

  const insertNonLosingNumber = (_numbers) => {
    const unpickedIndex = Math.floor(Math.random() * unpicked.length);
    const unpickedNumber = unpicked[unpickedIndex];
    const numbersIndex = Math.floor(Math.random() * _numbers.length);
    return [
      ..._numbers.slice(0, numbersIndex),
      unpickedNumber,
      ..._numbers.slice(numbersIndex + 1),
    ];
  };

  const alreadyPicked = (n) => {
    return picked.some((p) => p === n);
  };

  const testPick = (n) => {
    if (alreadyPicked(n)) {
      dispatch(reset());
      dispatch(clear());
    } else {
      dispatch(increment());
      dispatch(push(n));
    }
  };

  const pick = (n) => {
    if (locked) return;
    setLocked(true);
    testPick(n);
  };

  useEffect(() => {
    if (score === TOTAL_NUMBER_OF_CARDS) {
      setLocked(true);
      setTimeout(() => {
        dispatch(show());
      }, 700);
    } else {
      setTimeout(() => {
        generateCards();
        setLocked(false);
      }, 700);
    }
  }, [score]);

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
