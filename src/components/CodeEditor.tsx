import { Editor } from "@monaco-editor/react"
import { useRef, useState } from "react";
import type { editor as MonacoEditor } from "monaco-editor";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, type Language } from "../constants/langArray";
import Output from "./Output";
import ThemeOption from "./ThemeOption";

function CodeEditor() {
    const editorRef = useRef<MonacoEditor.IStandaloneCodeEditor | null>(null);

    const refOnMount = (editor : MonacoEditor.IStandaloneCodeEditor) =>{
        editorRef.current = editor;
        editor.focus();
    }

    const [codeText,setCodeText] = useState<string>(CODE_SNIPPETS["javascript"]);
    const [editorLanguage,setEditorLanguage] = useState<Language>("javascript");

    const editLangSelect = (lang:Language)=>{
        setEditorLanguage(lang);
        setCodeText(CODE_SNIPPETS[lang]);
    }
    return (
        <div className="border-2 p-4 m-4">
        <div className="flex items-center">
        <LanguageSelector editorLanguage={editorLanguage} editLangSelect={editLangSelect}/>
        <ThemeOption />
        </div>
            <div className="flex sm:flex-row flex-col">
                <div className="sm:w-[60%] mb-2">
                <Editor
                    onMount={refOnMount}
                    height={"90vh"}
                    theme="vs-dark"
                    language={editorLanguage}
                    defaultValue={CODE_SNIPPETS[editorLanguage as Language]}
                    value={codeText}
                    onChange={(codeText)=>setCodeText(codeText ?? "")}
                />
            </div>
            <Output editorRef={editorRef} editorLanguage={editorLanguage}/>
            </div>
        </div>
    );
};

export default CodeEditor
