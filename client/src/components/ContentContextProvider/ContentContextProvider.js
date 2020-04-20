import React, { useState } from 'react';
import ContentContext from "../ContentContext/ContentContext";

export default function ContentContextProvider(props) {
    const [fileContent, setFileContent] = useState("");
    return (
        <ContentContext.Provider value={{
            contents: fileContent,
            setContent: info => setFileContent(info)
        }}>
            {props.children}
        </ContentContext.Provider>
    )
}
