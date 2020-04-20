import React, { useContext } from 'react'
import styles from "./Display.module.scss";
import ContentContext from '../ContentContext/ContentContext';

export default function Display() {
    const contentContext = useContext(ContentContext);
    return (
        <div className={styles.display}>
            <p>
                {contentContext.contents}
            </p>
        </div>
    )
}
