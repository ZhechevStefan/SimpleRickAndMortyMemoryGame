import styles from "./Modal.module.css";

const Modal = props => {
  const currentScore = props.score;

  function restartGame() {
    props.setCurrentScore(0);
    props.setGameEnded(false);
  }

  return (
    <>
      <div className={styles.modal}>
        {currentScore === "max! 16!" ? (
          <div>You are as schwifty as they come!</div>
        ) : (
          <div>Ooops, this was a mistake!</div>
        )}
        <div>{`Your score is: ${currentScore}`}</div>

        <div>Wanna try again?</div>
        <button onClick={restartGame}>Of course!</button>
      </div>
      <div className={styles.backdrop} onClick={restartGame}></div>
    </>
  );
};

export default Modal;
