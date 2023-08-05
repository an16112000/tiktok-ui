import React from "react";
import styles from "./searchOptions.module.scss"

function SearchOptions({ content }) {
    return (
        <div className={styles.wrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="tiktok-f81823 e1ysk6kp16">
                <path fill="#FE2C55" fillRule="evenodd" d="M8.333.507a.437.437 0 0 0-.666 0L1.105 8.209a.437.437 0 0 0 .333.721h3.529v5.86c0 .24.196.437.437.437H10.6a.437.437 0 0 0 .437-.438V8.93h3.526a.437.437 0 0 0 .333-.72L8.333.506Z" clipRule="evenodd"></path>
            </svg>

            <p className={styles.content}>
                {content}
            </p>
        </div>
    )
}

export default SearchOptions;