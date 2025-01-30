import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toolsComplete } from './store/toolSlices';
import { useDispatch } from 'react-redux';

const Home = ({ todos }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('search') || '';

    const dispatch = useDispatch();

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchParams(value ? { search: value } : {}); 
    };

    const filteredTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const complitedTodo = (id) => {
        dispatch(toolsComplete(id))
    }

    return (
        <div>
            <h1>Lista To-Do:</h1>

            <input
                type="text"
                placeholder="Cerca to-do..."
                value={searchTerm} 
                onChange={handleSearch} 
                style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
            />

            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text} <Link to={`/todo/${todo.id}`}>Dettagli</Link>
                        <p>completed : {todo.completed.toString()}</p>
                        <button onClick={() => complitedTodo(todo.id)} disabled={todo.completed}>push</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
