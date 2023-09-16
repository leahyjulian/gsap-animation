import styles from './Egg.module.css';
import Hatch from './Hatch';

export default function Egg(props) {
  return (
    <div className={styles.class}>
      <Hatch />
    </div>
  );
}
