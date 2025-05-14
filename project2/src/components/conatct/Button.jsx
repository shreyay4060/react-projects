import React from "react";
import styles from "./Form.module.css";

export default function Button(props){
    return <button  type={props.type}onClick={props.onClick}  className={props.isOutline ? styles.btnEmail : styles.btn}>{props.icon}<a href={props.href}> {props.name}</a></button>
}