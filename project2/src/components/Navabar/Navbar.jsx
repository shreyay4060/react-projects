// import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar(){
    return <>
    
    <div className={`${styles.navbar} navbar`}>
        <nav>
            <div className="logo">
                <img src="/images/code.jpg" height="90px" alt="logo" />
            </div>
            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
        </nav>
    </div>
    
    </>
}