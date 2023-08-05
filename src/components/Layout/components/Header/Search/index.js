import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import Popped from "../Popped";
import styles from './Search.module.scss'
import { IconClose, IconLoading } from "./Icon";
import { useDebounce } from "../../Hooks/useDebounce";
import * as apiService from '../../../../../apiServices/apiService';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [focusInput, setInputFocus] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    // console.log(apiService.fetchApi)
    // const [Component, setComponent] = useState(React.Fragment);
    let Component = React.Fragment;
    const inputRef = useRef()
    function handleCloseIcon() {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    function onClickOutSide() {
        setInputFocus(false)
    }
    function onChoose() {
        setInputFocus(false);
    }
    if (focusInput == true) {
        // setComponent('div')
        Component = Popped

    } else {
        // setComponent(React.Fragment)
        Component = React.Fragment
    }

    const debounce = useDebounce(searchValue, 500);
    useEffect(() => {
        inputRef.current.focus();
    }, [Component])

    useEffect(
        () => {
            if (debounce.trim() == '') {
                return;
            }

            // Sử dụng apiService
            const fetchApi = async () => {
                const result = await apiService.fetchApi(debounce)
                setSearchResult(result.data)

            }
            fetchApi();


            // Sử dụng async/await
            // const fetchApi = async() => {
            //     const res = await request.get(
            //         'users/search', {
            //             params: {
            //                 q: debounce,
            //                 type: 'less'
            //             }
            //         }
            //     )
            //     setSearchResult(res.data)
            // }
            // fetchApi();

            // Sử dụng axios param trong code
            // request
            //     .get('users/search', {
            //         params: {
            //             q: debounce,
            //             type: 'less'
            //         }
            //     })
            //     .then(
            //         // response => response.json()
            //         (res) => res.data
            //     )
            //     .then(
            //         data => setSearchResult(data.data)
            //     )

            // Sử dụng phương pháp Fetch thông thường 
            // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${debounce}&type=less`)
            // .then (
            //     res => res.json()
            // )
            // .then (
            //     data => setSearchResult(data.data)
            // )
        }, [debounce]
    )
    const handleChange = (e) => {
        const contentValue = e.target.value;
        if (contentValue.startsWith(' ') || !contentValue.trim('')) {
            setSearchValue('');
            return;
        }
        setSearchValue(contentValue)
    }
    return (
        <Component
            {
            ...Component == Popped ? {
                onChoose,
                onClickOutSide,
                searchResult,
                searchValue
            }
                : {}
            }
        // onCLickOutSide={onCLickOutSide} 
        >
            {/* // <Popped searchResult = { searchResult }> */}

            <div className={styles.search}>
                <div className={styles["search-input"]}>
                    <input
                        ref={inputRef}
                        placeholder="Search"
                        value={searchValue}
                        onChange={handleChange}
                        onClick={() => setInputFocus(true)}
                    />
                </div>
                {
                    !!searchValue && <IconClose onClick={handleCloseIcon} />
                }
                {/* <IconLoading /> */}
                <span></span>
                <button
                    className={styles["search-btn"]}
                    onClick={() => setInputFocus(false)}
                >
                    <svg width="24" data-e2e="" height="24" viewBox="0 0 48 48" fill="rgba(22, 24, 35, .34)" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"></path></svg>
                </button>
            </div>
            {/* </Popped> */}
        </Component>
    )
}

export default Search;