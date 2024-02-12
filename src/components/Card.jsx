import { Flash } from "./Flash.jsx";
import { useState, useEffect } from "react";
import "../styles/Card.css";
import bgImage from "../assets/ball-game-poke-sport-sports-svgrepo-com.svg";

export function Card({ number, pick, locked }) {
  const [flash, setFlash] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fadingIn, setFadingIn] = useState(true);
  const [fadeout, setFadeout] = useState(false);

  const clickHandler = (e) => {
    if (locked || !imageLoaded || fadingIn) return;
    pick();
    setFlash(true);
  };

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;

  // fadeIn state is used to block clicks to allow some time
  // for the image to finish the fade-in animation
  // delay value should be equal to or greater than
  // the animation-duration value in Card.css
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      setTimeout(() => {
        setFadingIn(false);
      }, 500);
    };
    img.src = imageSrc;

    return () => {
      img.onload = null;
    };
  }, []);

  // fade out image after specified time (ms)
  // allows the image to fade out before the card gets destroyed
  useEffect(() => {
    if (locked) {
      setTimeout(() => setFadeout(true), 300);
    }
  }, [locked]);

  // silhouette image when 'locked' is true
  // unless it is the image of the picked card
  const silhouette = () => {
    if (locked && !flash) return " brightness-0";
    else return " brightness-100";
  };

  return (
    <div
      onClick={() => clickHandler()}
      className="image-card relative hover:cursor-pointer border border-gray-400 rounded-xl w-full h-48 dark:border-gray-700 bg-gray-300 dark:bg-gray-800"
    >
      {imageLoaded && (
        <div
          className={
            "absolute z-10 image transition ease-in-out duration-300 w-full h-full bg-center bg-contain bg-no-repeat" +
            silhouette() +
            (fadeout ? " opacity-0" : " opacity-100")
          }
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        ></div>
      )}
      <div
        className={
          "bg-image relative w-full opacity-40 h-full bg-center bg-contain bg-no-repeat" +
          (imageLoaded ? "" : " animate-pulse")
        }
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {flash && <Flash />}
    </div>
  );
}

export default Card;
