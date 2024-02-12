import Card from "./Card.jsx";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { push, clear } from "../features/game/gameSlice";
import { show } from "../features/modal/modalSlice";
import generateCards from "../helpers/cardGenerator.js";

export function Cards() {
  const [cards, setCards] = useState([]);
  const [locked, setLocked] = useState(true);

  const dispatch = useDispatch();
  const game = useSelector((state) => state.game.value);
  const { unpicked, score, complete } = game;

  const pick = (n) => {
    if (locked) return;
    setLocked(true);
    dispatch(push(n));
  };

  useEffect(() => {
    if (score == 0) dispatch(clear());

    if (complete) {
      setLocked(true);
      setTimeout(() => {
        dispatch(show());
      }, 300);
    } else {
      setTimeout(() => {
        setCards(generateCards(unpicked));
        setLocked(false);
      }, 600);
    }
  }, [score]);

  return (
    <div className="overflow-hidden p-2 md:p-4 lg:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
      {cards.map(({ key, number }) => (
        <Card
          pick={() => pick(number)}
          locked={locked}
          key={key}
          number={number}
        />
      ))}
    </div>
  );
}

export default Cards;
