import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const data = new Date();
    const [hora, setHora] = useState(0);

    setTimeout(() => {
        setHora(data.toLocaleTimeString());
    }, 1000);

    return (
        <div className="container">
            <h1>{hora}</h1>
        </div>
    );
}

export default App;
