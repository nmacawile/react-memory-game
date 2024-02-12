import { useSelector } from "react-redux";
import "../styles/Flash.css";

export function Flash({ flash }) {
  const currentScore = useSelector((state) => state.game.value.score);
  const textClasses =
    "opacity-0 flash-text z-[11] transition-all duration-600 ease-in-out select-none text-8xl font-bold absolute -translate-y-2/4 -translate-x-2/4 left-2/4 top-2/4";

  return (
    <h1
      className={
        textClasses + (currentScore == 0 ? " text-red-500" : " text-green-700")
      }
    >
      {currentScore}
    </h1>
  );
}

export default Flash;
