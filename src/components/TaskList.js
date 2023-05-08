import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";
import "./taskList.css";

export const TaskList = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(true);
  const styles = {
    color: show ? "#3D8361" : "#be3434",
    border: "2px solid #be3434",
    borderColor: show ? "#3D8361" : "#be3434",
    borderRadius: "5px",
    fontSize: "28px",
    padding: "20px",
  };
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <section className="tasklist">
      <ul>
        <div className="header">
          <h1>TaskList</h1>
          <button className="trigger" onClick={() => setShow(!show)}>
            {show ? "Hide Tasks" : "Show Tasks"}
          </button>
        </div>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum</p>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          minima in similique voluptatibus, quae excepturi. Veniam aspernatur
          veritatis esse mollitia, voluptatibus reiciendis iure id itaque
          voluptatem temporibus ex officia minima.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          commodi adipisci officiis veniam totam. Harum dolorum atque itaque
          esse rem hic, voluptas non? Suscipit dicta iusto officiis culpa,
          cumque quae.
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem ipsum</p>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          minima in similique voluptatibus, quae excepturi. Veniam aspernatur
          veritatis esse mollitia, voluptatibus reiciendis iure id itaque
          voluptatem temporibus ex officia minima.
        </p>
      </BoxCard>
    </section>
  );
};
