import React, {ReactNode} from "react";
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';

type MainLayoutProps = {
    children?: ReactNode
}

const MainLayout = ({children}: MainLayoutProps)=> {
    return (
        <>
        <Header/>
            <Outlet />
        <Footer/>
        </>
    )
}

export default MainLayout;