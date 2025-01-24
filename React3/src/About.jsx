import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate()

    return (
        <>
        <button onClick={() => navigate('/')}>vai alla home</button>
        <h1>Organizzare la giornata</h1>
        <p>Ti aiuta a partire con chiarezza, evitando di sentirti sopraffatto. Decidere le priorità rende tutto più gestibile.</p>
        <h1>Lavoro/Studio</h1>
        <p>Questa sezione è pensata per le tue attività professionali o accademiche. Include cose pratiche come completare un compito importante o rispondere alle comunicazioni.</p>
        <h1>Casa</h1>
        <p>Riguarda il mantenimento dell ambiente in cui vivi, perché una casa organizzata favorisce anche la concentrazione.</p>
        </>
    )

}

export default About