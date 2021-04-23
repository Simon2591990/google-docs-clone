import React, { useCallback, useEffect, useRef } from 'react';
import Quill from "quill"
import "quill/dist/quill.snow.css"
import './styles.css'
import {io} from 'socket.io-client'


const TOOLBAR_OPTIONS = []

function TextEditor(props) {
    useEffect(() => {
        io('http://localhost:3001')
    })
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return
        wrapper.innerHTML = ""
        const editor = document.createElement('div')
        wrapper.append(editor)
        new Quill(editor, {theme: 'snow'})
    }, [])

    return (
        <div class='container' ref={wrapperRef}></div>
    );
}

export default TextEditor;