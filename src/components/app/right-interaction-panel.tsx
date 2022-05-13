import { useState } from 'react';

import { Resizable } from '../resizeable/resizable';

const defaultWidth = 250;

/**
 * Is a resizable panel on the right hand side of the main application screen.
 * Displays various things based on current context such as file changes, or
 * information about a specific selected commit.
 * @returns
 */
export function RightInteractionPanel(): JSX.Element {
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
        onRight={false}
      >
        <div className="bg-gray-300 h-full"></div>
      </Resizable>
    </div>
  );
}
