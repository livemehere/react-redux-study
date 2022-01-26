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
