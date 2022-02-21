import { List } from "antd";
import { useEffect, useState } from "react";
export default function Task({ item }) {
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
    //THEN: fetch tasks
    //THEN: setTasks(data)
  };
  return (
    <List.Item onClick={handleToggleTaskDone} style={itemStyle}>
      {item.task}
    </List.Item>
  );
}
