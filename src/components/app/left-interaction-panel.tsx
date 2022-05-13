import { useState } from 'react';

import { Resizable } from '../resizeable/resizable';

const defaultWidth = 250;

export function LeftInteractionPanel(): JSX.Element {
  const [width, setWidth] = useState(defaultWidth);

  const onReset = () => {
    setWidth(defaultWidth);
  };

  const onWidthChange = (width: number) => {
    setWidth(width);
  };

  return (
    <div>
      <Resizable
        className="h-screen"
        width={width}
        onReset={onReset}
        onResize={onWidthChange}
      >
        <div className="bg-gray-300 h-full"></div>
      </Resizable>
    </div>
  );
}
