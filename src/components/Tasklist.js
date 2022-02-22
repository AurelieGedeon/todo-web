import { useEffect } from "react";
import { List } from "antd";
import Task from "./Task";

export default function TaskList({ tasks, setTasks, loading, setLoading }) {
  useEffect(() => {
    setLoading(true);
    fetch("https://much-todo-ag.uc.r.appspot.com/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(alert);
  }, []);

  //tasks has all the data

  //we need to pass this tasks => data to the List component
  return (
    <List
      bordered
      size="large"
      loading={loading}
      dataSource={tasks}
      renderItem={(item) => (
        <>
          <Task
            item={item}
            setTasks={setTasks}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      )} //render item is like .map
    />
  );
}
