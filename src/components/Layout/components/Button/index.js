import React from "react";
import styles from './Button.module.scss'
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function Button({ children, primary, white, fullWidth, disable, onClick, ...passProps }) {
    let Comp = 'button';
    const css = cx('button', {
        primary,
        white,
        fullWidth,
        disable
    })
    const events = {
        onClick,
        ...passProps
    }
    if(disable) {
        Object.keys(events).forEach(
            (key) => {
                if(key.startsWith('on') && typeof events[key] == 'function') {
                    delete events[key];
                }
            }
        )
    }
    return (
        <Comp className={css} {...events}>
            <div className={cx('wrapper')}>
                {children}
            </div>
        </Comp>
    )
}

export default Button;