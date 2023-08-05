import React from "react";
import classNames from "classnames/bind";
import styles from './HeaderOfMenu.module.scss';

const cx = classNames.bind(styles);

function HeaderOfMenu({title, onClick}) {
    // console.log(onClick);
        return (
        <header className={cx('wrapper')}>
            <i className="fa-solid fa-chevron-left" onClick={onClick}></i>
            <div className={cx('content')}>
                <p>{title}</p>
            </div>
        </header>
    )
}

export default HeaderOfMenu;