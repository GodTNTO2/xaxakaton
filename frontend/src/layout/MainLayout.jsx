import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../Bar/NavBar"
import Footer from "../Bar/footer"


export const MainLayout = () => {
    
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}