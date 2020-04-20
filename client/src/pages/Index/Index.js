import React from 'react';
import LoginCard from "../../components/LoginCard/LoginCard";
import styles from "./Index.module.scss";

export default function Index() {
    return (
        <div className={styles.landing}>
            <LoginCard/>
        </div>
    )
}
