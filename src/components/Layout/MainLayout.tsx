import React, {ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";

type MainLayoutProps = {
    children?: ReactNode

}
const MainLayout = ({children}:MainLayoutProps) => {
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}

export default MainLayout;