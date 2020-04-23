import React, { useState } from 'react';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from "./LoginCard.module.scss";
import axios from "axios";

export default function LoginCard() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = {
            email: userName,
            password: password
        }
        try {
            await axios.post("/users/login", user);
            window.location.assign('/home');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.loginCard}>
            <h1 className={styles.loginHeader}>Login</h1>
            <form onSubmit={handleLogin}>
                <TextInput type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)} />
                <TextInput type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <div className={styles.loginButton}>
                    <Button onClick={handleLogin} text="Login"/>
                </div>
            </form>
        </div>
    )
}
