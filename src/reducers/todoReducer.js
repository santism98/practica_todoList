

export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case '[TODO] add todo':
            return [...state, ...state,
                {
                  id: action.payload.id,
                  todo: action.payload.todo,
                  description: action.payload.description,
                  done: false,
                  date: action.payload.date
                }];
           

        case '[TODO] delete todo':
            console.log(action.payload)
            return state.filter(todo => todo.id !== action.payload.id);
        

        case '[TODO] toggle todo':
            return 
        
        default:
            return state
    }

}
