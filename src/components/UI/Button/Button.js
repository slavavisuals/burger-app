import React from 'react';
import classes from './Button.module.css';

const button = props => (
  //we use join on array to convert classes to strings (className must be string)
  <button
    onClick={props.clicked}
    className={[classes.Button, classes[props.btnType]].join(' ')}
  >
    {props.children}
  </button>
  //we used props.children to pass our text  where this button gonna be used
);

export default button;
