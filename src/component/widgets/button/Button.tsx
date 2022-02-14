import { CircularProgress } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import "./Button.css";
export interface ButtonProps {
  title?: string;
  leftIcon?: any;
  rightIcon?: any;
  buttonStyle?: string;
  onClick?: React.MouseEventHandler;
  type?: any
  loading?: boolean
  primaryButton?: boolean
  count?: number,
  disable?: boolean
}

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      position: 'relative',
      display: "inline"
    },
    buttonProgress: {
      color: "#006cc9",
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  })
);


export default function Button(props: ButtonProps) {
  const { loading, count = 0, disable } = props;
  const classes = useStyles();
  const disableButton = useSelector((state: any) =>
    state.appReducer.disableActionButton, shallowEqual
  )
  return (
    <div className={classes.wrapper}>
      <button
        type={props.type || 'button'}
        className={"btn ".concat(props.buttonStyle || "")}
        onClick={props.onClick}
        disabled={disableButton || loading || disable}
      >
        {props.leftIcon}
        {(count > 0) && <span className="mr-2 count-text"> {count}</span>}
        <span> {props.title}</span>
        {props.rightIcon}
      </button>
      {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>
  );
}


