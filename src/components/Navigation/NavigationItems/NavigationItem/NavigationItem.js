import React from 'react';
import classes from '../NavigationItem/NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a
            href={props.link}
            //if prop active exist assign class active, otherwise don't
            className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;