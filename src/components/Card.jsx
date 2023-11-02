import { Flash } from "./Flash.jsx";
import { useState, useEffect } from "react";
import "../styles/Card.css";

export function Card({ number, pick, locked }) {
  const [flash, setFlash] = useState(0);
  const [appear, setAppear] = useState(false);

  const clickHandler = (e) => {
    if (locked || !appear) return;
    pick();
    setFlash(1);
    setTimeout(() => {
      setFlash(0);
    }, 610);
  };

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setAppear(true);
    };
    img.src = imageSrc;

    return () => {
      img.onload = null;
    };
  }, []);

  const silhouette = () => {
    if (locked) {
      if (flash === 0) return " brightness-0 contrast-100";
      else return "";
    }
    return "";
  };

  return (
    <div
      onClick={() => clickHandler()}
      className="image-card relative hover:cursor-pointer border border-gray-200 rounded-xl w-full h-48 dark:border-gray-700 dark:bg-gray-800"
    >
      <div
        className={
          "relative z-10 image transition ease-in-out duration-500 w-full h-full bg-center bg-contain bg-no-repeat" +
          silhouette() +
          (appear ? " opacity-100" : " opacity-0 blur-sm")
        }
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      ></div>

      <Flash flash={flash} />
    </div>
  );
}

export default Card;
