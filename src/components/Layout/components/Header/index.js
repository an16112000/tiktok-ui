import React from "react";
import Tippy from '@tippyjs/react';
import { Link } from "react-router-dom";

import 'tippy.js/dist/tippy.css';
import styles from './header.module.scss'
import Popped from "./Popped";
import Button from "../Button";
import MenuHeaderPopped from "./MenuHeaderPopped/MenuHeaderPopped";
import USER from "../../../User";
import { MENU_ITEMS, HEADER_LOGIN_ACTIONS, USER_MENU } from "../../../constant";
import LogoTikTokHeader from "./image/LogoTikTokHeader";
import Image from "../../../Avatar";
import Search from "./Search";
import routes from "../../../../config/routes";

function Header() {
    const user_id = true;

    return (
        <div className={styles.header}>
            <Link className={styles.logo} to={routes.home}>
                <LogoTikTokHeader style={styles.tiktokLogo} />
            </Link>
            <div className={styles["search-container"]}>
                {/* Search */}
                <Search />
            </div>
            <div className={styles.actions}>
                <Button white>
                    <div className={styles.upload}>
                        <svg className="tiktok-qeydvm-StyledPlusIcon e18d3d945" width="1em" data-e2e="" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"></path>
                        </svg>
                        Upload
                    </div>
                </Button>
                {
                    user_id ? (
                        <>
                            {
                                HEADER_LOGIN_ACTIONS.map(
                                    (action, index) => {
                                        return <Tippy delay={'200ms'} content={action.content} key={action.id}>
                                            <div className={styles.action}>
                                                {action.img}
                                            </div>
                                        </Tippy>
                                    }
                                )
                            }
                            {
                                <MenuHeaderPopped data={USER_MENU}>
                                    <Image
                                        style={styles.avatar}
                                        src={USER.img}
                                        fallback = 'https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png'
                                    />
                                </MenuHeaderPopped>
                            }
                        </>
                    ) : (
                        <>
                            <Button
                                primary
                                onClick={() => alert('Thong bao')}
                            >
                                Log in
                            </Button>
                            <MenuHeaderPopped data={MENU_ITEMS}>
                                <svg className={`tiktok-lgo5n0-StyledEllipsisVertical e13wiwn64 ${styles.menu}`} width="1em" data-e2e="" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"></path>
                                </svg>

                            </MenuHeaderPopped>
                        </>

                    )
                }
            </div>
        </div>
    )
}

export default Header;