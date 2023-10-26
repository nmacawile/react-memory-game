import "../styles/Card.css";
import { useSelector } from "react-redux";

export function Card({ number, pick }) {
  const score = useSelector((state) => state.score.value);

  const clickHandler = (e) => {
    pick();
  };

  return (
    <div
      onClick={() => clickHandler()}
      className="overflow-hidden hover:cursor-pointer border border-gray-200 rounded-xl w-full h-48 dark:border-gray-700 dark:bg-gray-800"
    >
      <div
        className="transition-transform w-full h-full bg-center bg-contain bg-no-repeat hover:scale-110"
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png')`,
        }}
      ></div>
    </div>
  );
}

export default Card;
