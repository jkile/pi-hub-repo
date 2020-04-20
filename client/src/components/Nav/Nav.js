import React from 'react';
import styles from "./Nav.module.scss";
import menu24px from "../../assets/menu24px.svg"

export default function Nav(props) {
    return (
        <div className={styles.nav}>
            <h1 className={styles.header}>Pi Hub</h1>
            <img src={menu24px} className={styles.burger} onClick={props.setSidebarPullout}/>
            
        </div>
    )
}
