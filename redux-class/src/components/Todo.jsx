import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { marksAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();
    const clickHandler = (id) => {
        console.log("delete id: ", id);
        dispatch(deleteTodo(id));
    };
    const markDone = (id) => {
        console.log("Mark as Done id: ", id);
        dispatch(marksAsDone(id));
    };

    return (
        <>
            <AddForm />
            <h2>Todo List</h2>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                            {todo.task}
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        <button onClick={() => markDone(todo.id)}>Mark As Done</button>

                    </li>
                ))}
            </ul>
        </>
    );
};