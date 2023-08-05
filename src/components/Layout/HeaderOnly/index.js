import React from "react";
import Header from "../components/Header";

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default HeaderOnly;