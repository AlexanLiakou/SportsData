import React, {ReactNode} from "react";
import { Outlet } from 'react-router-dom';

type OpenLayoutProps = {
    children?: ReactNode
}

const OpenLayout = ({children}:OpenLayoutProps)=> {
    return (
        <>
            <Outlet />
        </>
    )
}

export default OpenLayout;