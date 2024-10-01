import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "tailwindcss/tailwind.css";
import "@fontsource-variable/onest";
import "@fontsource/pacifico";
import ContextProvider from './Context/main.jsx';
import "./index.css"

createRoot(document.getElementById('root')).render(
  <div className='container'>
    <ContextProvider>
      <App />
    </ContextProvider>
  </div>
)
