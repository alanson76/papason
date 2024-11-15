import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-ui";
import { tokens, components } from "react-ui/themes/light";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider tokens={tokens} components={components}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
