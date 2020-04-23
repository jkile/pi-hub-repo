import React, { useState } from 'react'
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./NewRepoContainer.module.scss"
import axios from 'axios';

export default function NewRepoContainer() {
    const [repoName, setRepoName] = useState("")
    const [repoUrl, setRepoUrl] = useState("")

    const handleNewRepo = () => {
        axios.post("/api/git/init/" + repoName)
            .then(res => {
                setRepoUrl(res.data)
            })
            .catch(e => console.log(e));
    }

    return (
        <div className={styles.newRepoContainer}>
            <div className={styles.newButton}>
                <Button text="New Repo" onClick={handleNewRepo}/>
            </div>
            <div className={styles.repoInput}>
                <TextInput type="text" placeholder="Enter Repo Name" onChange={e => setRepoName(e.target.value)} value={repoName}/>
            </div>
        <div className={styles.repoUrl}>{repoUrl}</div>
        </div>
    )
}
