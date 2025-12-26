import { useEffect } from "react";
import { THEMES } from "../constants/index";
import { useThemeStore } from "../hooks/useThemeStroe";


function ThemeOption() {
    const {theme,setTheme} = useThemeStore();

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme);
    },[theme]);
    
    return (
        <div className="p-4">
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Themes</legend>
            <select 
                defaultValue="Pick a Theme" 
                className="select"
                value={theme}
                onChange={(e)=>setTheme(e.target.value)}
            >
                <option disabled={true}>Pick a browser</option>
                {
                    THEMES.map((t)=>(
                        <option
                            key={t}
                            value={t}
                        >{t}</option>
                    ))
                }
            </select>
            </fieldset>
        </div>
    );
}

export default ThemeOption;
