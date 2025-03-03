"use client";

import MonacoEditor from "@monaco-editor/react";


const Editor = () => {

    return(
        <MonacoEditor
            height="80vh"
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue='//wrote code'
        />
    )

}

export default Editor;