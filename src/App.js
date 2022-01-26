import { useDispatch, useSelector } from "react-redux";
import Todo from "./components/todo";
import { decreaseCount, increaseCount } from "./counterReducer";
import { AaddTodo } from "./todoReducer";

function App() {
  const { todoReducer, counterReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addTodo = (e) => {
    const text = e.target[0].value;
    e.preventDefault();
    dispatch(AaddTodo(text));
    e.target[0].value = "";
  };

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
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
