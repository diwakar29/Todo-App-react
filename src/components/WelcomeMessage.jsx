import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-item-store";
const WelcomeMessage = () => {
  const todoItemsContext = useContext(TodoItemsContext);
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <p className={styles.welcome}> Enjoye Your day</p>
  );
};
export default WelcomeMessage;
