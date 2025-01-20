import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoProvider from './assets/TodoProvider.jsx'

createRoot(document.getElementById('root')).render(
    <TodoProvider>
        <App />
    </TodoProvider>,
)
