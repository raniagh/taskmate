import { useRef, useState } from "react";
import "./addTask.css";

export const AddTask = ({ tasks, setTasks }) => {
  //const [taskValue, setTaskValue] = useState("");
  const taskRef = useRef("");
  const [progress, setProgress] = useState(false);
  /* const handleChange = (event) => {
    setTaskValue(event.target.value);
  }; */
  const handleReset = () => {
    taskRef.current.value = "";
    setProgress(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskRef.current.value,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    handleReset();
  };
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task name"
          autoComplete="off"
          ref={taskRef}
        />
        <select
          onChange={(event) => setProgress(event.target.value)}
          value={progress}
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="reset" onClick={handleReset} className="reset">
          Reset
        </button>
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};
