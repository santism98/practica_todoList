export const setLocal = (todos) => {

    localStorage.setItem('todos', JSON.stringify(todos));
  
  };
  
  export const getLocal = () => {
  
    return JSON.parse(localStorage.getItem('todos')) || [];
  
  };
  