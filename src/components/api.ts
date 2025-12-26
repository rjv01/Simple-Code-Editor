import axios from "axios";
import {  LANGUAGE_VERSIONS, type Language } from "../constants/langArray";

const API = axios.create({
    baseURL:"https://emkc.org/api/v2/piston",
    headers: {
        "Content-Type": "application/json",
    },
});


export const executeCode = async (language:Language,sourceCode:string)=>{
    const response = await API.post("/execute",{
        language,
        version:LANGUAGE_VERSIONS[language],
        files:[
            {
                content:sourceCode,
            },
        ],
    });
    return response.data;
};