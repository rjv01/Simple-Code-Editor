import { useState, type RefObject } from "react";
import { type editor as MonacoEditor } from "monaco-editor";
import { executeCode } from "./api";
import type { Language } from "../constants/langArray";

type OutputPros = {
    editorRef: RefObject<MonacoEditor.IStandaloneCodeEditor | null>,
    editorLanguage:Language
}

function Output({editorRef,editorLanguage}:OutputPros) {

    const [result,setResult] = useState<string>("");

    const runCode = async()=>{
        const sourceCode = editorRef.current?.getValue();
        if(!sourceCode)
            return ;
        try {
            const ans = await executeCode(editorLanguage,sourceCode);
            const stdout = ans.run?.stdout ?? "";
            const stderr = ans.run?.stderr ?? "";

            setResult(stderr || stdout || "No output");
        } catch (error) {
            console.log("Error: ",error);
            setResult("Execution failled");
        }
    }
    
    return (
        <div className="sm:w-[50%] max-w-2xl border-2 sm:ml-4 rounded-lg p-4 bg-accent/20">
            <button 
                className="border-2 bg-accent/30 p-4 hover:bg-accent/50 text-2xl transition duration-200 rounded-lg cursor-pointer"
                onClick={runCode}
            >Run Code</button>
            <div className="border-2 mt-4 p-4 h-135 rounded-2xl">
                {
                    !result ? (
                        <p>Click 'Run Code' to see code output here.https://github.com/rjv01/Simple-Code-Editor.git</p>
                    ) : (
                        <p>{result}</p>
                    )
                }
            </div>
        </div>
    );
};

export default Output
