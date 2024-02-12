import { Flash } from "./Flash.jsx";
import { useState, useEffect } from "react";
import "../styles/Card.css";

export function Card({ number, pick, locked }) {
  const [flash, setFlash] = useState(false);
  const [appear, setAppear] = useState(false);

  const clickHandler = (e) => {
    if (locked || !appear) return;
    pick();
    setFlash(true);
    // removes the invisible Flash component from the DOM
    setTimeout(() => setFlash(false), 600);
  };

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;

  // fade in image after loading
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

  // silhoutte image when 'locked' is true
  // unless it is the image of the picked card
  const silhouette = () => {
    if (locked && !flash) return " brightness-0 contrast-100";
    else return "";
  };

  // 'appear' is set to false initially then
  // changes into true when the image is loaded
  const fadeIn = () => {
    return appear ? " opacity-100" : " opacity-0 blur-sm";
  };

  return (
    <div
      onClick={() => clickHandler()}
      className="image-card relative hover:cursor-pointer border border-gray-300 rounded-xl w-full h-48 dark:border-gray-700 bg-gray-200 dark:bg-gray-800"
    >
      <div
        className={
          "relative z-10 image transition ease-in-out duration-500 w-full h-full bg-center bg-contain bg-no-repeat" +
          silhouette() +
          fadeIn()
        }
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      ></div>
      {flash && <Flash />}
    </div>
  );
}

export default Card;
