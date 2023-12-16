import styles from "./Header.module.css";

const Header = props => {
  const highscore = localStorage.getItem("highscore");

  return (
    <>
      <header className={styles.header}>
        <div>
          <h1>Rick and Morty memory game!</h1>
          <h2>Test if your memory is as schwifty as you think.</h2>
        </div>
        <div>
          <h3>{`Current score: ${props.score}`}</h3>
          <h3>{`Highscore: ${highscore ? highscore : "0"}`}</h3>
        </div>
      </header>
    </>
  );
};

export default Header;
