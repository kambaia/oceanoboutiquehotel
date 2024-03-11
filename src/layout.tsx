import React, { Fragment, ReactNode } from 'react';
import Header from "./components/Header";
import { Footer } from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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