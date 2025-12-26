import { LANGUAGE_VERSIONS, type Language } from "../constants/langArray";

type editorLanguageProps = {
    editorLanguage:string,
    editLangSelect:(lang: Language)=>void
}

function LanguageSelector({editorLanguage,editLangSelect}:editorLanguageProps) {
    return (
        <div className="p-4">
            <fieldset className="fieldset">
                <option disabled={true}>Pick a language</option>
                <select 
                    className="select"
                    defaultValue={editorLanguage}
                    onChange={(e)=>editLangSelect(e.target.value as Language)}
                >
                    {
                        Object.entries(LANGUAGE_VERSIONS).map(([lang,version]) =>(
                            <option
                                key={lang}
                                value={lang}
                                className={editorLanguage === lang ? "bg-accent/40" : "transparent"}
                            >
                                {lang} {(version)}
                            </option>
                        ))
                    }
                </select>
            </fieldset>
        </div>
    );
}

export default LanguageSelector
