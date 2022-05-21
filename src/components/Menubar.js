import React from 'react';
import styles from '../css/Menubar.module.css';

const Menubar = () => {
    return (
        <div className={styles.menubarBody}>
            <div className={styles.logo}>Meta4Music</div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Technique</a></li>
                <li><a href="#">Team</a></li>
            </ul>
            <button type="button">Login / SignUp</button>
        </div>
    );
};

export default Menubar;