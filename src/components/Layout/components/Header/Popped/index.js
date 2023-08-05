import React, { useState } from "react";
import Tippy from '@tippyjs/react/headless';
import styles from './Popped.module.scss'
import SearchOptions from "./searchOptions/searchSuggest";
import SearchResult from "./searchOptions/searchResult";



function Popped({ children, style, onClickOutSide, searchResult = [], searchValue, onChoose}) {
    return (
        <Tippy
            onClickOutside={onClickOutSide}
            interactive
            placement="bottom-start"
            visible={searchResult.length > 0}
            render={() => (
                // <div className={styles.wrapper}>
                <div
                    onClick={onChoose}
                    className={`${styles.wrapper}`}
                    tabIndex="-1"
                >
                    <h4 className={styles.title}>You may like</h4>
                    <div className={styles.options}>
                        <div className={styles.option}>
                            <SearchOptions content={searchValue} key={1} />
                        </div>

                        <h4 className={styles.title}>Accounts</h4>
                        {
                            searchResult.map(
                                (item) => {
                                    return <div key={item.id} className={styles.option}>
                                        <SearchResult
                                            img={item.avatar}
                                            name={item.nickname}
                                            account={item.full_name}
                                            to={`/@${item.nickname}`}
                                            title={item.full_name}
                                        />
                                    </div>
                                }
                            )
                        }

                    </div>
                </div>
                // </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Popped;