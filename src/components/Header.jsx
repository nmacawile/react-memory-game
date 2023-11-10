import { useSelector } from "react-redux";

export function Header() {
  const score = useSelector((state) => state.score.value);
  const currentScore = score.current;
  const highScore = score.high;

  return (
    <header className="flex justify-between items-center py-2 px-4 bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
        Memory Game
      </span>
      <div className="flex flex-col items-end">
        <div className="dark:text-white text-xl">
          <span>Score: {currentScore}</span>
        </div>
        <div className="dark:text-white text-xl">
          <span>High: {highScore}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
