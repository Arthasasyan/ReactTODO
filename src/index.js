import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';
import DoneList from "./DoneList";

const App = () => {
    const {todos, dones, addTodo, deleteTodo, setToDone, setToTodo, deleteDone} = useTodoState();

    return (
        <div className="App">
            <Typography component="h1" variant="h2">
                Todos
            </Typography>

            <TodoForm
                saveTodo={todoText => {
                    const trimmedText = todoText.trim();

                    if (trimmedText.length > 0) {
                        addTodo(trimmedText);
                    }
                }}
            />

            <TodoList todos={todos} deleteTodo={deleteTodo} setToDone={setToDone}/>

            <Typography component="h1" variant="h2">
                Dones
            </Typography>
            <DoneList dones={dones} deleteDone={deleteDone} setToTodo={setToTodo}/>
        </div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
