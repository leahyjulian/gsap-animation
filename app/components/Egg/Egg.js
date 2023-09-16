import { useState } from 'react';
import styles from './Egg.module.css';
import Hatch from './Hatch';

export default function Egg(props) {
  const [hatched, setHatched] = useState(null);
  const animate = () => {
    hatched.play();
  };
  return (
    <div className={styles.class}>
      <button onClick={animate}>Hatch</button>
      <Hatch setHatched={setHatched} />
    </div>
  );
}
