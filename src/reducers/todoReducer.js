

export const todoReducer = (state = [], action) => {

    switch (action.type) {

        case '[TODO] add todo':

            return [...state, action.payload]

        case '[TODO] delete todo':

            console.log(action.payload)

            return state.filter(todo => todo.id !== action.payload.id);

        case '[TODO] toggle todo':

            return

        default:

            return state
            
    }
}