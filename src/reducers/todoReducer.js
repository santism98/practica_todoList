
export const todoReducer = (state = [], action) => {

    switch (action.type) {

        case '[TODO] add todo':

            return [...state, action.payload]

        case '[TODO] delete todo':

            const newState = state.filter(todo => todo.id !== action.payload);

            return newState

        case '[TODO] toggle todo':
            console.log(id)
            const newToggle = state.map(todo=>{ 

                if(todo === todo.id){

                    todo.done = !todo.done

                }}
                )
                
            return newToggle

        default:

            return state
            
    }
}