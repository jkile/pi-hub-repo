import React, { useEffect, useState } from 'react';
import TreeItem from "../TreeItem/TreeItem"
import styles from "./Sidebar.module.scss";
import axios from "axios";

export default function Sidebar(props) {

    const [fileTreeObject, setFileTreeObject] = useState({});
    const [files, setFiles] = useState(null);

    useEffect(() => {
        axios.get("/documents")
            .then(res => {
                setFileTreeObject(res.data);
                console.log(res.data)
            })
            .catch(e => console.log(e))
        axios.get("/documents/db")
            .then(res => {
                console.log(res.data[0])
                setFiles(res.data)

            })
    }, [])

    return (
        <div className={`${styles.sidebar} ${props.sidebarPullout ? {} : styles.hide}`}>
            <h1 className={styles.repoHeader}>Repos: </h1>
            <ul className={styles.tree}>
                {files && <TreeItem name={fileTreeObject.name} children={fileTreeObject} open={true} files={files}/>}
            </ul>

        </div>
    )
}
