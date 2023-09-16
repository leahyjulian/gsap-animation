import gsap, { Power1 } from 'gsap';
import { useEffect, useRef } from 'react';
import styles from './Egg.module.css';
export default function Hatch({ setHatched }) {
  const hatchRef = useRef(null);
  const crackRefR = useRef(null);
  const crackRefL = useRef(null);
  const crackRef = useRef(null);
  const topEggRef = useRef(null);

  const hideCrack = {
    strokeDasharray: 1,
    strokeDashoffset: 1,
  };

  useEffect(() => {
    const rockEgg = {
      keyframes: {
        rotation: [9, -8, 6, -5, 3, -2, 0],
      },
      duration: 0.5,
      transformOrigin: '50% 100%',
    };

    const timeline = gsap.timeline({
      paused: true,
    });
    timeline
      .to(hatchRef.current, rockEgg)
      .to(
        crackRefR.current,
        {
          strokeDashoffset: 0,
          duration: 0.5,
        },
        '<+=0.2'
      )
      .to(hatchRef.current, rockEgg)
      .to(
        crackRefL.current,
        {
          strokeDashoffset: 2,
          duration: 0.5,
        },
        '<+=0.2'
      )
      .to(hatchRef.current, rockEgg)
      .to(
        crackRef.current,
        {
          strokeDashoffset: 0,
          duration: 0.3,
          onComplete: () => {
            crackRefL.current.style.strokeDashoffset = 1;
            crackRefR.current.style.strokeDashoffset = 1;
            crackRef.current.style.strokeDashoffset = 1;
          },
        },
        '<+=0.2'
      )
      .to(topEggRef.current, { y: -30, duration: 0.7, ease: Power1.easeIn })
      .to(topEggRef.current, { y: -15, duration: 0.3, ease: Power1.easeOut })
      .to(topEggRef.current, { y: -80, duration: 0.7, ease: Power1.easeOut });

    setHatched(timeline);
  }, [setHatched]);

  return (
    <div className={styles.class}>
      <svg
        width="500"
        height="599"
        viewBox="0 0 500 599"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="hatch" ref={hatchRef}>
          <g id="egg-dino" ref={topEggRef}>
            <path
              id="dino"
              d="M305 319L311.5 370V391.5L315 435.5L319.5 457.5L286 468H250.5V419V370C247.333 373.5 238.6 380.2 229 379C219.4 377.8 205.333 354.167 199.5 342.5C198.167 338.167 196.3 327.4 199.5 319C202.7 310.6 222.5 295.5 232 289L286 293.5L305 319Z"
              fill="#0D6B39"
            />
            <g id="spots">
              <path
                d="M300 377.5C300 384.404 296.418 390 292 390C287.582 390 284 384.404 284 377.5C284 370.596 287.582 365 292 365C296.418 365 300 370.596 300 377.5Z"
                fill="#8B2A2A"
              />
              <path
                d="M306 425C306 433.284 301.523 440 296 440C290.477 440 286 433.284 286 425C286 416.716 290.477 410 296 410C301.523 410 306 416.716 306 425Z"
                fill="#8B2A2A"
              />
              <path
                d="M280 402.5C280 406.642 277.314 410 274 410C270.686 410 268 406.642 268 402.5C268 398.358 270.686 395 274 395C277.314 395 280 398.358 280 402.5Z"
                fill="#8B2A2A"
              />
            </g>
            <ellipse
              id="eye"
              cx="256"
              cy="339"
              rx="10"
              ry="6"
              transform="rotate(-14.0253 256 339)"
              fill="#1DEDED"
            />
            <circle id="eye-inner" cx="251" cy="340" r="5" fill="#1553F2" />
            <path
              id="mouth"
              d="M221 372C231.167 370.833 251.8 366.1 253 356.5"
              stroke="black"
            />
            <path
              id="egg-top"
              d="M124 331.5L166 356L183 331.5L201 352.5L240 312.5L279.5 352.5L310 312.5L358 352.5L388 322C374.667 271.167 330.4 169.6 260 170C189.6 170.4 140 277.833 124 331.5Z"
              fill="#FFFFFF"
            />
          </g>
          <path
            id="egg-btm"
            d="M124 330.5C113 370.333 100.8 463 140 515C179.2 567 231.333 577.333 252.5 576C278.333 577.833 339 567.4 375 511C411 454.6 398.667 360.833 388 321L358 351.5L310 311.5L279.5 351.5L240 311.5C227.5 324.833 202.2 351.5 201 351.5C199.8 351.5 188.5 337.5 183 330.5L166 355L124 330.5Z"
            fill="#FFFFFF"
          />
          <path
            style={hideCrack}
            id="crack"
            ref={crackRef}
            d="M124 331.5L165.5 356L183 331.5L200.5 352.5L240 313L279.5 352.5L309.5 313L357.5 352.5L387.5 323"
            stroke="black"
            pathLength="1"
          />
          <path
            style={hideCrack}
            id="crack-l-r"
            ref={crackRefL}
            d="M165.5 356L183 331.5L200.5 352.5L240 313"
            stroke="black"
            pathLength="1"
          />
          <path
            style={hideCrack}
            id="crack-r-l"
            ref={crackRefR}
            d="M240 313L279.5 352.5L309.5 313L357.5 352.5"
            stroke="black"
            pathLength="1"
          />
        </g>
      </svg>
    </div>
  );
}
