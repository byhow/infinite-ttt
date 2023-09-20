import type { MouseEventHandler } from "react";

type SquareProps = {
  onClick: MouseEventHandler;
  value: number;
};

export default function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
