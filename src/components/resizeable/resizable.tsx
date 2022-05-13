import '../../styles/resizable.css';

import React from 'react';

import { clamp } from '../../lib/clamp';

const DefaultMaxWidth = 350;
const DefaultMinWidth = 200;

export interface IResizableProps {
  readonly width: number;

  /** The maximum width the panel can be resized to.
   *
   * @default 350
   */
  readonly maximumWidth?: number;

  /**
   * The minimum width the panel can be resized to.
   *
   * @default 200
   */
  readonly minimumWidth?: number;

  /** The optional ID for the root element. */
  readonly id?: string;

  readonly children?: React.ReactNode;

  readonly className?: string;

  readonly onRight?: boolean;

  readonly onReset: () => void;
  readonly onResize: (width: number) => void;
}

export function Resizable(props: IResizableProps) {
  let startWidth: number | null = null;
  let startX: number | null = null;

  const onRight = props.onRight ?? true;

  const getCurrentWidth = (): number => {
    return clamp(
      props.minimumWidth ?? DefaultMinWidth,
      props.maximumWidth ?? DefaultMaxWidth,
      props.width
    );
  };

  const handleDragStart = (e: React.MouseEvent<any>) => {
    startX = e.clientX;
    startWidth = getCurrentWidth();

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragStop);
  };

  const handleDragMove = (e: MouseEvent) => {
    if (startWidth === null || startX === null) {
      return;
    }

    const direction = onRight ? 1 : -1;

    const deltaX = (e.clientX - startX) * direction;

    const newWidth = startWidth + deltaX;

    props.onResize(newWidth);
    e.preventDefault();
  };

  const handleDragStop = (e: MouseEvent) => {
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragStop);
    e.preventDefault();
  };

  const style: React.CSSProperties = {
    width: getCurrentWidth(),
    maxWidth: props.maximumWidth,
    minWidth: props.minimumWidth,
    height: '100%',
  };

  const handleStyle: React.CSSProperties = {
    right: onRight ? -5 : undefined,
    left: onRight ? undefined : -5,
  };

  console.log(props.children);
  console.log(onRight);

  return (
    <div id={props.id} className="resizable-component" style={style}>
      {props.children}
      <div
        onMouseDown={handleDragStart}
        onDoubleClick={props.onReset}
        className="resize-handle"
        style={handleStyle}
        role="none"
      ></div>
    </div>
  );
}
