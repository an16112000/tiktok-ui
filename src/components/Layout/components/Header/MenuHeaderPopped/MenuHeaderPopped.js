import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tippy from '@tippyjs/react/headless';
import styles from './MeunuHeaderPopped.module.scss'
import MenuPopped from ".";
import HeaderOfMenu from "./HeaderOfMenu";

function MenuHeaderPopped({ children, data, hideOnClick = false }) {
    const [title, setTitle] = useState('');
    const [history, setHistory] = useState([{ data }])
    const current = history[history.length - 1]
    let handleClick = () => { }
    const handleClickBack = () => {
        setHistory(prev => {
            const newHistory = [...prev]
            newHistory.splice(prev.length - 1, 1)
            return newHistory
        }
        )
    }
    let Comp = 'div'
    // const haveChildren = !!current.children;
    const isChildren = history.length > 1 && true;
    if (data.to) {
        Comp = 'Link'
    }

    return (
        <Tippy
            visible
            // hideOnClick={hideOnClick}
            delay={300}
            placement="bottom-end"
            interactive
            render={attrs => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <div className={styles.wrapper}>
                        {isChildren && <HeaderOfMenu title={title} onClick={handleClickBack} />}
                        <div className={styles.options}>
                            {
                                current.data.map(
                                    (item, index) => {
                                        const isParent = !!item.children;
                                        if (isParent) {
                                            handleClick = () => {
                                                setTitle(item.children.content)
                                                setHistory(prev => {
                                                    const newHistory = [...prev, item.children]
                                                    return newHistory;
                                                }
                                                )
                                            }
                                        }
                                        else {
                                            handleClick = () => {

                                            }
                                        }
                                        return <MenuPopped data={item} key={index} onClick={handleClick} />
                                    }
                                )
                            }
                        </div>

                    </div>
                </div>
            )}
        >
            {children}
        </Tippy>
        // <div>
        //     {
        //         data.map(
        //             (item, index) => {
        //                 <MenuPopped data={item}>{children}</MenuPopped>
        //             }
        //         )
        //     }
        // </div>
    )
}

export default MenuHeaderPopped;