import React from 'react'
import { IInfoProps } from "./interface/IInfo";
import { animated, useSpring } from 'react-spring';
import { imgData } from '../data/Const';

export function Info(props: IInfoProps) {
    const { active, index, setActive } = props;
    const [{ y }, set] = useSpring(() => ({ y: !active ? -40 : 0 }));
    set({ y: !active ? -40 : 0 });
    return (
      <>
        <animated.div
          id="cross"
          onClick={() => {
            setActive(false);
          }}
          style={{
            transform: y
              .interpolate({ range: [-40, 0], output: [0, 1] })
              .interpolate(y => `scale(${y})`)
          }}
        >
          <div className="close" />
        </animated.div>
        <animated.div
          style={{ bottom: y.interpolate(y => `${y}vh`) }}
          id="infocontainer"
        >
          <div id="detailName">{imgData[index].name}</div>
          <div id="detailPro">{imgData[index].detail}</div>
          <button id="follow">Follow</button>
          <button id="message">Message</button>
          <img
            id="detailImage"
            alt='Details'
            src={imgData[index].images[0]}
            style={{ background: "#000" }}
          />
          <img
            id="detailImage"
            alt='Details'
            src={imgData[index].images[1]}
            style={{ background: "#2174f3" }}
          />
        </animated.div>
      </>
    );
  };