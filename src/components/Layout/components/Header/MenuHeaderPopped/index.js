import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import styles from './MeunuHeaderPopped.module.scss'
import HeaderOfMenu from "./HeaderOfMenu";

function MenuPopped({ data, onClick }) {
    const props = {
        onClick
    }
    let Comp = 'div';
    if (data.to) {
        Comp = Link
    }

    if(!data.feature) {
        data.feature = ''
    } 
    return (
        <div className={styles[data.feature]}>
            <Comp to={data.to} className={`${styles.option}`} {...props}>

                <div className={styles.icon}>
                    {data.img}
                </div>
                <div>
                    {data.content}
                </div>
                <div className={styles.darkmode}>
                    {data.darkmode}
                </div>
            </Comp>
        </div>
    )
}

export default MenuPopped;