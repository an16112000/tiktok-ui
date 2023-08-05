import React, { useState } from "react";
import styles from './sideBar.module.scss'
import Button from "../Button";
import { Link } from "react-router-dom";
import { LogoExplore, LogoFollowing, LogoForYou, LogoLive } from "./icon";

const data = [
    {
        id: 1,
        title: 'For You',
        img: LogoForYou ,
        to: '/'
    },
    {
        id: 2,
        title: 'Following',
        img: LogoFollowing,
        to: '/following'
    },
    {
        id: 3,
        title: 'Explore',
        img: LogoExplore,
        to: '/explore'
    },
    {
        id: 4,
        title: 'LIVE',
        img: LogoLive,
        to: '/live'
    }
]

function SideBar() {
    const [active, setActive] = useState(1);
    function handleActive(id) {
        setActive(id);
    }
    return (
        <div className={styles.container}>
            {
                data.map(
                    (item, index) => {
                        return <Link
                            to={item.to}
                            className={`${styles.option} ${active == item.id && styles.active}`}
                            key={item.id}
                            onClick={() => handleActive(item.id)}
                        >
                            <div className={styles.icon}>
                                {item.img}
                            </div>
                            <Button fullWidth>
                                {item.title}
                            </Button>
                        </Link>
                    }
                )
            }
            
        </div>
    )
}

export default SideBar;