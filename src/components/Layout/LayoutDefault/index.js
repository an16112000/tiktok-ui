import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import styles from './layoutDefault.module.scss'

function Layout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <SideBar />
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    )
}

export default Layout;