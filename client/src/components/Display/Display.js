import React, { useContext } from 'react'
import styles from "./Display.module.scss";
import ContentContext from '../ContentContext/ContentContext';
import NewRepoContainer from "../NewRepoContainer/NewRepoContainer";


export default function Display() {
    const contentContext = useContext(ContentContext);
    return (
        <div className={styles.display}>
            <NewRepoContainer />
            <p>
                {contentContext.contents}
            </p>
        </div>
    )
}
