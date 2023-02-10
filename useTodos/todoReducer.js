export const todoReducer = (initialState = [], action) => {


    switch (action.type) {
        case '[TODO] Add Todo':
            return [
                ...initialState, action.payload
            ];


        case '[TODO] Delete Todo':
            return initialState.filter((todo) => {return todo.id !== action.payload} );


        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                console.log(todo.id, "    ", action.payload)
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });

        default:
            return initialState;
    }
}