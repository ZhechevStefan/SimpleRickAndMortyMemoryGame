import styles from "./CharCard.module.css";

const CharCard = props => {
  return (
    <div className={styles.card} id={props.id} onClick={props.onClick}>
      <div className={styles["img-container"]}>
        <img className={styles.charImg} src={props.img} alt={props.name} />
      </div>
      <span className={styles.charName}>{props.name}</span>
    </div>
  );
};

export default CharCard;
