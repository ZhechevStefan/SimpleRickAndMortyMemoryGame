import styles from "./MainGame.module.css";
import CharCard from "./CharCard.jsx";
import { useState } from "react";

const char1 = {
  name: "Beth Smith",
  img: "/src/assets/chars/BethSmith.png"
};
const char2 = {
  name: "Birdperson",
  img: "/src/assets/chars/BirdPerson.png"
};
const char3 = {
  name: "Canklanker",
  img: "/src/assets/chars/Canklanker.png"
};
const char4 = {
  name: "Dr. Xenon Bloom",
  img: "/src/assets/chars/DrXenonBloom.png"
};
const char5 = {
  name: "Jerry Smith",
  img: "/src/assets/chars/JerrySmith.png"
};
const char6 = {
  name: "Meeseeks",
  img: "/src/assets/chars/Meeseeks.png"
};
const char7 = {
  name: "Morty Smith",
  img: "/src/assets/chars/Morty.png"
};
const char8 = {
  name: "Mr. Nimbus",
  img: "/src/assets/chars/MrNimbus.png"
};
const char9 = {
  name: "Mr. Poopy Butthole",
  img: "/src/assets/chars/MrPoopyButthole.png"
};
const char10 = {
  name: "Pickle Rick",
  img: "/src/assets/chars/PickleRick.jpg"
};
const char11 = {
  name: "Purpose Robot",
  img: "/src/assets/chars/PurposeRobot.png"
};
const char12 = {
  name: "Rick Sanchez",
  img: "/src/assets/chars/RickSanchez.png"
};
const char13 = {
  name: "Scary Terry",
  img: "/src/assets/chars/ScaryTerry.png"
};
const char14 = {
  name: "Snuffles",
  img: "/src/assets/chars/Snuffles.png"
};
const char15 = {
  name: "Summer Smith",
  img: "/src/assets/chars/SummerSmith.png"
};
const char16 = {
  name: "Fart",
  img: "/src/assets/chars/Fart.png"
};

const allCharacters = [
  char1,
  char2,
  char3,
  char4,
  char5,
  char6,
  char7,
  char8,
  char9,
  char10,
  char11,
  char12,
  char13,
  char14,
  char15,
  char16
];

function shuffleChars(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const MainGame = props => {
  const [isSelected, setIsSelected] = useState([]);

  function selectCharHandler(event) {
    const current = event.currentTarget.id;
    if (!isSelected.includes(current)) {
      setIsSelected(state => [...state, current]);
      props.scoreHandler();
    } else {
      setIsSelected([]);
      props.endGame();
    }
  }

  shuffleChars(allCharacters);
  return (
    <div className={styles["main-game__grid"]}>
      {allCharacters.map(char => (
        <CharCard
          key={char.name}
          id={char.name}
          img={char.img}
          name={char.name}
          onClick={selectCharHandler}
        />
      ))}
    </div>
  );
};

export default MainGame;
