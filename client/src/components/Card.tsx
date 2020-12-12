import React from 'react';
import { ICardProps } from "./interface/ICard";
import { interpolate, animated, useSpring } from 'react-spring';

export function Card(props: ICardProps) {
    const { _x, _y, num, index, data, active, setActive }: ICardProps = props;
    const cardIndex = num - index;
    const offset = cardIndex * 276 + 80;
    const [{ x, y, scale }, set] = useSpring(() => ({
      x: _x + offset,
      y: _y,
      scale: active ? 2.4 : 1
    }));
    const [{ posX, posY, proScale, blur }, setPro] = useSpring(() => ({
      posX: 0,
      posY: 0,
      proScale: 1.2,
      config: { mass: 2 },
      blur: 0
    }));
    const handleClick = () => {
      if (num === index) {
        if (!active) {
          set({ scale: 2.2 });
          setPro({ posX: -53, posY: -337, proScale: 2.5, blur: 4 });
          setActive(true);
        }
      }
    };
    set({ x: _x + offset, y: _y });
    if (num === index) {
      if (!active) {
        set({ scale: 1 });
        setPro({ posX: 0, posY: 0, proScale: 1, blur: 0 });
      }
    }
    return (
      <animated.div
        id="card"
        style={{
          transform: interpolate(
            [
              //@ts-ignore
              x.interpolate(x => `translateX(${x}px)`),
              //@ts-ignore
              y.interpolate(y => `translateY(${y}px)`)
            ],
            (translateX, translateY) => `${translateX} ${translateY}`
          ),
          zIndex: num === index ? 10 : 1
        }}
      >
        <animated.div
          id="imgContainer"
          style={{
            transform: scale.interpolate(s => `scale(${s})`)
          }}
        >
          <animated.img
            style={{
              width: "300%",
              userSelect: "none",
              transform: x
                //@ts-ignore
                .interpolate({ range: [-196, 356], output: [-380, -20] })
                .interpolate(x => `translate3d(${x}px, 0px, 0px)`)
            }}
            src={data.url}
          />
          <animated.div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              backdropFilter: blur.interpolate(x => ` blur(${x}px)`),
              backgroundColor: blur
                .interpolate({ range: [0, 4], output: [0, 0.3] })
                .interpolate(x => `rgba(0, 0, 0, ${x})`)
            }}
          />
        </animated.div>
        <animated.img
          id="profile"
          style={{
            transform: interpolate(
              [
                //@ts-ignore
                posX.interpolate(x => `translateX(${x}px)`),
                //@ts-ignore
                posY.interpolate(y => `translateY(${y}px)`),
                //@ts-ignore
                proScale.interpolate(y => `scale(${y})`)
              ],
              (translateX, translateY, proScale) =>
                `${translateX} ${translateY} ${proScale}`
            ),
            border: proScale
              .interpolate({ range: [1, 2.5], output: [6, 4] })
              .interpolate(x => `${x}px solid #fff`)
          }}
          src={data.profile}
          onClick={handleClick}
        />
      </animated.div>
    );
  };