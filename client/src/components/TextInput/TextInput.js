import React from 'react';
import styles from "./TextInput.module.scss";

export default function TextInput(props) {
    return (
        <input className={styles.input} 
        type={props.type} 
        style={{width: props.width + "rem"}} 
        placeholder={props.placeholder} 
        onChange={props.onChange} 
        value={props.value}/>
    )
}
