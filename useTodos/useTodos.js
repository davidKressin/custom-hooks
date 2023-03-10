import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {


    const initialState = [];

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo
        }

        dispatchTodo(action)

    }

    const handleDeleteTodo = (id) => {
        dispatchTodo({
            type: "[TODO] Delete Todo",
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatchTodo({
            type: "[TODO] Toggle Todo",
            payload: id
        })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}