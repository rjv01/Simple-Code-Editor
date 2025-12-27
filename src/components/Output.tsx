import { useState, type RefObject } from "react";
import { type editor as MonacoEditor } from "monaco-editor";
import { executeCode } from "./api";
import type { Language } from "../constants/langArray";
import  axios  from "axios";

type OutputPros = {
    editorRef: RefObject<MonacoEditor.IStandaloneCodeEditor | null>,
    editorLanguage:Language
}

function Output({editorRef,editorLanguage}:OutputPros) {

    const [result,setResult] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(false);
    const [err,setError] = useState<string>("");

    const runCode = async()=>{
        setLoading(true);
        const sourceCode = editorRef.current?.getValue();
        if(!sourceCode){
            setError("No Code Found!!!");
            return ;
        }
        setError("");
        setResult("");
        try {
            const ans = await executeCode(editorLanguage,sourceCode);
            const stdout = ans.run?.stdout ?? "";
            const stderr = ans.run?.stderr ?? "";

            setResult(stderr || stdout || "No output");
        } catch (error) {
            console.log("Error:", error);

            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || "Execution failed");
            } else if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Error with the code");
            }
            setResult("Execution failled");
        } finally{
            setLoading(false);
        }
    }
    
    return (
        <div className="sm:w-[50%] max-w-2xl border-2 sm:ml-4 rounded-lg p-4 bg-accent/20">
            <button 
                className="bg-red-400/30 p-4 hover:bg-red-400/50 text-2xl transition duration-200 rounded-lg cursor-pointer"
                onClick={runCode}
                disabled={loading}
            >
                {
                    loading ? (
                        <p className="h-8 w-8 animate-spin rounded-full border-4  border-t-transparent"></p>
                    ) : (
                        <p>Run Code</p>
                    )
                }
            </button>
            <div className="border-2 mt-4 p-4 h-135 rounded-2xl">
                {
                    loading ? (
                        <div className="flex gap-1 items-center">
                            <p className="text-2xl">Executing </p>
                            <span className="h-2 w-2 mt-3 animate-bounce rounded-full bg-accent [animation-delay:-0.3s]"></span>
                            <span className="h-2 w-2 mt-3 animate-bounce rounded-full bg-accent [animation-delay:-0.15s]"></span>
                            <span className="h-2 w-2 mt-3 animate-bounce rounded-full bg-accent"></span>
                        </div>
                        ) : err ? (
                            <p className="text-red-500">{err}</p>
                        ) : result ? (
                            <pre className="whitespace-pre-wrap">{result}</pre>
                        ) : (
                            <p>Click 'Run Code' to see code output here.</p>
                        )
                }
            </div>
        </div>
    );
};

export default Output
