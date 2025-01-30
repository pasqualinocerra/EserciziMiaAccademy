import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import PublicLayout from "./PublicLayout"
import TodoDetails from "./TodoDetails"
import { Provider } from "react-redux"
import store from "./store"

const App = () => {

  const todos = [
    { id: '1', text: 'Scrivere gli obiettivi principali.', details: 'Dettaglio: Pianifica i tuoi obiettivi principali per la settimana.' },
    { id: '2', text: 'Assegnare priorità.', details: 'Dettaglio: Ordina le attività per importanza e urgenza.' },
    { id: '3', text: 'Rispondere alle email/messaggi importanti.', details: 'Dettaglio: Controlla le email e rispondi alle più urgenti.' },
    { id: '4', text: 'Fare la spesa o una lista per gli acquisti.', details: 'Dettaglio: Prepara una lista completa degli acquisti necessari.' },
];

  return (
    <>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Home todos={todos} />} />
          <Route path="/todo/:id" element={<TodoDetails todos={todos} />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      </Provider>
    </>
  )
}

export default App
