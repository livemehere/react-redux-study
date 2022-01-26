# React 에서 Redux 사용하기

## 여러가지 reducer를 생성하고, combine하고, useSelect, useDispatch 사용하기

### index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

### app.js

```js
import { useDispatch, useSelector } from "react-redux";
import Todo from "./components/todo";
import { DECREASE, INCREASE } from "./counterReducer";
import { ADD } from "./todoReducer";

function App() {
  const { todoReducer, counterReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addTodo = (e) => {
    const text = e.target[0].value;
    e.preventDefault();
    dispatch({ type: ADD, text: text });
    e.target[0].value = "";
  };

  const handleIncrease = () => {
    dispatch({ type: INCREASE });
  };

  const handleDecrease = () => {
    dispatch({ type: DECREASE });
  };

  return (
    <div className="App">
      <h1>React Todo with Redux</h1>
      <form onSubmit={addTodo}>
        <input type="text" />
        <button>ADD</button>
      </form>
      <ul>
        {todoReducer.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <h1>Counter</h1>
      <span>{counterReducer}</span>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

export default App;
```

### todo.js

```js
import { useDispatch } from "react-redux";
import { REMOVE } from "../todoReducer";

export default function Todo({ id, text }) {
  const dispatch = useDispatch();
  return (
    <li>
      {text}
      <button onClick={() => dispatch({ type: REMOVE, id: id })}>x</button>
    </li>
  );
}
```

### rootReducer

```js
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  todoReducer,
  counterReducer,
});

export default rootReducer;
```

### todoReducer

```js
export const ADD = "ADD";
export const REMOVE = "REMOVE";

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
```

### counterReducer

```js
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

const initalState = 0;

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
```

## Action 분리하기

### todoReducer.js

```js
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
```

### app.js

```js
const addTodo = (e) => {
  const text = e.target[0].value;
  e.preventDefault();
  dispatch(AaddTodo(text));
  e.target[0].value = "";
};
```

### todo.js

```js
import { useDispatch } from "react-redux";
import { AremoveTodo } from "../todoReducer";

export default function Todo({ id, text }) {
  const dispatch = useDispatch();
  return (
    <li>
      {text}
      <button onClick={() => dispatch(AremoveTodo(id))}>x</button>
    </li>
  );
}
```

### counterReducer.js

```js
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const increaseCount = () => ({ type: INCREASE });
export const decreaseCount = () => ({ type: DECREASE });

const initalState = 0;

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
```

### app.js

```js
const handleIncrease = () => {
  dispatch(increaseCount());
};

const handleDecrease = () => {
  dispatch(decreaseCount());
};
```
