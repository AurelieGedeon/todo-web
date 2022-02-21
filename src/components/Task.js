import { List } from "antd";
import { useEffect, useState } from "react";

export default function Task({ item, setTasks }) {
  const [itemStyle, setItemStyle] = useState({});
  useEffect(() => {
    if (item.done) {
      setItemStyle({ color: "grey", textDecoration: "line-through" });
    } else {
      setItemStyle({ color: "black", textDecoration: "none" });
    }
  }, [item]);

  const handleToggleTaskDone = () => {
    //call API -- patch: `/tasks/${item.id}` send done: !item.done
    fetch(`https://much-todo-ag.uc.r.appspot.com/tasks/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ done: !item.done }),
    })
      .then(() => {
        fetch("https://much-todo-ag.uc.r.appspot.com/tasks")
          .then((res) => res.json())
          .then((data) => setTasks(data));
      })
      .catch(alert);
    //THEN: fetch tasks
    //THEN: setTasks(data)
  };
  return (
    <List.Item onClick={handleToggleTaskDone} style={itemStyle}>
      {item.task}
    </List.Item>
  );
}
