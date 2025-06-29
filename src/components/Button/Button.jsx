import styles from "./Button.module.css";

function Button({ buttonText }) {
  return (
    <button className={styles.btn}>
      {buttonText}
    </button>
  );
}

export default Button;
// This code defines a simple button component in React.
// The button uses CSS modules for styling, and it accepts a prop `buttonText` for the button label.