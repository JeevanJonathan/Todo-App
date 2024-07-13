import styles from "./TodoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    console.log("Delete Button Clicked for item: ", item);
  }

  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const lineName = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <h3 className={styles.itemName}>
        <span className={lineName} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </h3>
      <hr className={styles.line} />
    </div>
  );
}
