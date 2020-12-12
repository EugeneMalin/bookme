import React from 'react';
import { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import './App.css';
import { Card } from './components/Card';
import { Head } from './components/Head';
import { Info } from './components/Info';
import { heightOffset, imgData } from './data/Const';

function App() {
  const [{ x, y }, set] = useState(() => ({ x: 0, y: heightOffset }));
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const bind = useDrag(
    ({ down, movement: [x, y], distance, direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!active) {
        if (trigger && !down) {
          if (!(index + dir * -1 >= imgData.length || index + dir * -1 < 0)) {
            setIndex(index + dir * -1);
          }
          set({ x: 0, y: heightOffset });
        } else {
          set({ x: down ? x : 0, y: heightOffset });
        }
      }
    }
  );
  return (
    <div id="app" {...bind()}>
      {Head}
      {imgData.map((data, i) => {
        return (
          <Card
            key={i}
            //@ts-ignore
            _x={x}
            //@ts-ignore
            _y={y}
            num={i}
            index={index}
            data={data}
            active={active}
            setActive={setActive}
          />
        );
      })}
      <Info active={active} index={index} setActive={setActive}/>
    </div>
  );
}
export default App;
