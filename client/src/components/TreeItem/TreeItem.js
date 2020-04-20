import React, { useState, useEffect, useContext } from 'react';
import styles from "./TreeItem.module.scss";
import axios from 'axios';
import  ContentContext  from '../ContentContext/ContentContext';

export default function TreeItem(props) {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const contentContext = useContext(ContentContext);

    useEffect(() => {
        if (props.files) {
            props.files.forEach(entry => {
                if (entry.filePath === props.children.path) {
                    setId(entry._id)
                }
            })
        }
    }, [])


    const handleClick = () => {
        console.log(id)
        axios.get("/documents/" + id)
            .then(res => {
                if(typeof res.data === "object"){
                    contentContext.setContent(JSON.stringify(res.data, null, 2))
                } else {
                    contentContext.setContent(res.data)
                }
                
            })
    }

    if (props.children.children) {
        return (
            <li className={`${styles.item}  ${props.open ? styles.active : styles.nested}`}><span className={`${open ? styles.caretDown : {}} ${styles.caret}`} onClick={() => setOpen(!open)}></span>{props.name}
                <ul className={`${styles.item} ${open ? styles.active : styles.nested}`}>
                    {props.children.children && props.children.children.map(item => {
                        return <TreeItem name={item.name} children={item} open={props.open} files={props.files} />
                    })}
                </ul>
            </li>)
    } else {
        return (
            <li className={`${styles.item}  ${props.open ? styles.active : styles.nested}`} onClick={handleClick} >
                {props.name}
            </li>
        )
    }






}
