import { useEffect } from "react";
import { useThemeStore } from "./hooks/useThemeStroe";
import CodeEditor from "./components/CodeEditor";


function App() {
  const { theme } = useThemeStore();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  
  return (
    <div className="min-h-screen">
      <CodeEditor />
    </div>
  );
};

export default App
