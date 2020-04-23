import React from 'react';
import styles from "./Button.module.scss";

export default function (props) {
    return (
        <button className={styles.btn} onClick={props.onClick}>{props.text}</button>
    )
}
