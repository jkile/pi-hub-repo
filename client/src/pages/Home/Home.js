import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Display from "../../components/Display/Display";
import ContentContextProvider from "../../components/ContentContextProvider/ContentContextProvider";
export default function Home(props) {

    return (
        <div>
            <ContentContextProvider>
                <Sidebar sidebarPullout={props.sidebarPullout} />
                <Display />
            </ContentContextProvider>
        </div>
    )
}
