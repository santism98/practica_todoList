

export const todoReducer = (state = [], action) => {

    switch (action.type) {

        case '[TODO] add todo':

            return [...state, action.payload]

        case '[TODO] delete todo':

            const newState = state.filter(todo => todo.id !== action.payload.id);

            return newState

        case '[TODO] toggle todo':

            return

        default:

            return state
            
    }
}