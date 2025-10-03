import React from "react";
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;

//Yeh hm layout hme react router dom ke saath milta h yeh hme jb use aata h 
//tb hme kuch components ko har page pr dikhana hota h jaise header footer to uske liye yeh use hota h