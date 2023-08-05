import React, { useState } from "react";
import styles from './DarkMode.module.scss'

function DarkMode() {
    const [state, setState] = useState('light');
    const element = document.body;
    function handleClick() {
        if(state == 'light') {
            element.classList.toggle(styles['dark-mode']);
            setState('dark');
        }
        else if (state == 'dark') {
            element.classList.remove(styles['dark-mode']);
            setState('light');
        }
    }
    return (
        <div className={`${styles.container} ${styles[`${state}-container`]}`} onClick={handleClick}>
            <span className={`${styles.circle} ${styles[`${state}-circle`]}`}></span>
        </div>
    )
}

export default DarkMode;