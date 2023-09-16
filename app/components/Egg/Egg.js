import { useState } from 'react';
import styles from './Egg.module.css';
import Hatch from './Hatch';

export default function Egg(props) {
  const [hatched, setHatched] = useState(null);
  const animate = () => {
    hatched.play();
  };
  return (
    <div className={styles.eggBox}>
      <button className={styles.btn} onClick={animate}>
        Hatch Dinosaur
      </button>
      <Hatch setHatched={setHatched} />
    </div>
  );
}
