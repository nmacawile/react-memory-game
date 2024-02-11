import { useSelector } from "react-redux";

export function Header() {
  const { score, high } = useSelector((state) => state.game.value);

  return (
    <header className="flex justify-between items-center py-2 px-4 bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
        Memory Game
      </span>
      <div className="flex flex-col items-end">
        <div className="dark:text-white text-xl">
          <span>Score: {score}</span>
        </div>
        <div className="dark:text-white text-xl">
          <span>High: {high}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
