import styles from './Toggle.module.css';

function Toggle({onToggle , label}) {
return (
    <div onClick={onToggle}>
      <span className={styles.toggleLabel}>{label}</span>
    </div>
  );
}

export default Toggle;