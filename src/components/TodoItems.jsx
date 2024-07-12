import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import Todoitem from "./TodoItem";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <Todoitem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></Todoitem>
      ))}
    </div>
  );
};

export default TodoItems;
