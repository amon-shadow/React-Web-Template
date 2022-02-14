import React from "react";
import { useSelector, shallowEqual } from "react-redux";
export interface ButtonProps {
  title?: string;
  icon?: any;
  buttonStyle?: string;
  onClick: React.MouseEventHandler;
}




export function Buttons(props: ButtonProps) {
  const disableButton = useSelector((state: any) =>
    state.appReducer.disableActionButton, shallowEqual
  )
  return (
    <button
      className={"btn ".concat(props.buttonStyle || "")}
      onClick={props.onClick}
      disabled={disableButton}
    >
      {props.icon}
      {props.title}
    </button>
  );
}


