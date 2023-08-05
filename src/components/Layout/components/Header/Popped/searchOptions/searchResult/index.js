import React from "react";
import { Link } from "react-router-dom";
import styles from "./searchResul.module.scss";

function SearchResult(props) {
    console.log(props)
    return (
        <Link 
        className={styles.wrapper}
        to={props.to}
        onClick={()=>document.title = props.title}
        >
            <div className={styles.img}>
                <img src={props.img} />
            </div>
            <div className={styles.user}>
                <p>{props.name}</p>
                <span>{props.account}</span>
            </div>
        </Link>
    )
}

export default SearchResult;