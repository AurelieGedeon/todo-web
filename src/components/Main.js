import { useState } from "react";
import TaskList from "./Tasklist";
import NewTask from "./NewTask";

export default function Main() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState();
  return (
    <section
      style={{ background: "white", padding: "40px 40px 40px", opacity: 0.8 }}
    >
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        loading={loading}
        setLoading={setLoading}
      />
      <br />
      <NewTask setTasks={setTasks} setLoading={setLoading} />
    </section>
  );
}
