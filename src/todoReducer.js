export const ADD = "ADD";
export const REMOVE = "REMOVE";

export const AaddTodo = (text) => ({ type: ADD, text: text });
export const AremoveTodo = (id) => ({ type: REMOVE, id: id });

const initalState = [{ id: Date.now(), text: "go work" }];

const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, { id: Date.now(), text: action.text }];
    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default todoReducer;
