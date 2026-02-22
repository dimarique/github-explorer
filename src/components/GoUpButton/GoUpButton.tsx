import styles from "./GoUpButton.module.css";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const GoUpButton = () => {
  return (
    <div className={styles.goUpButton}>
      <button onClick={scrollToTop}>↑</button>
    </div>
  );
};

export default GoUpButton;
