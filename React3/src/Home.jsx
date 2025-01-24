import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ todos }) => {
    return (
        <div>
            <h1>Lista To-Do:</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text} <Link to={`/todo/${todo.id}`}>Dettagli</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;