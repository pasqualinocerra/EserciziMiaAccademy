import { useParams, Link } from 'react-router-dom';

const TodoDetails = ({ todos }) => {
    const { id } = useParams(); 
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
        return <p>To-do non trovato!</p>;
    }

    return (
        <div>
            <h1>Dettagli del To-Do</h1>
            <p><strong>Testo:</strong> {todo.text}</p>
            <p><strong>Dettagli:</strong> {todo.details}</p>
            <p>completed : {todo.completed.toString()}</p>
            <Link to="/">Torna alla lista</Link>
        </div>
    );
};

export default TodoDetails;