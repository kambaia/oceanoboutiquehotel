import React, { Fragment, ReactNode } from 'react';
import Header from "./components/Header";
import { Navbar } from "./components/Header/Navbar";
import { Footer } from './components/Footer';

export interface Props {
    children: ReactNode
}


export const Layout: React.FC<Props> = ({
    children,
}) => {
    return (
        <Fragment>
            <div className="flex flex-col w-full">
                <Header />
               
                {children}
                <Footer />
            </div>
        </Fragment>
    )
}

export default Layout;