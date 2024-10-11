import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "tailwindcss/tailwind.css";
import "@fontsource-variable/onest";
import "@fontsource/pacifico";
import ContextProvider from "./Context/main.jsx";
import "./index.css";

<div className="min-x-96 containe flex-col justify-center">
    {createRoot(document.getElementById("root")).render(
        <ContextProvider>
            <App />
        </ContextProvider>
    )
    }
</div>

