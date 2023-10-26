import { useSelector } from "react-redux";

export function Header() {  
  const score = useSelector((state) => state.score.value);

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
        Memory Game
      </span>
      <span className="text-white text-2xl">Score: {score}</span>
    </header>
  );
}

export default Header;
