import { List, Checkbox, Popconfirm, message, Button } from "antd";
import { useEffect, useState } from "react";

export default function Task({ item, setTasks, setLoading }) {
  const [itemStyle, setItemStyle] = useState({});
  useEffect(() => {
    if (item.done) {
      setItemStyle({
        color: "grey",
        textDecoration: "line-through",
        display: "flex",
        width: "auto",
      });
    } else {
      setItemStyle({
        color: "black",
        textDecoration: "none",
        display: "flex",
        width: "auto",
      });
    }
  }, [item]);

  const handleToggleTaskDone = () => {
    setLoading(true);
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
          .then((data) => {
            setTasks(data);
            setLoading(false);
          });
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
    //THEN: fetch tasks
    //THEN: setTasks(data)
  };

  function cancel(e) {
    e.preventDefault();
    console.log(e);
    message.error("Canceled");
  }

  const handleDelete = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch(`https://much-todo-ag.uc.r.appspot.com/tasks/${item.id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetch("https://much-todo-ag.uc.r.appspot.com/tasks")
          .then((res) => res.json())
          .then((data) => {
            setTasks(data);
            setLoading(false);
          });
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };
  return (
    <>
      <List.Item style={itemStyle}>
        <Checkbox
          style={{ margin: "10px" }}
          onClick={handleToggleTaskDone}
          checked={item.done}
        ></Checkbox>
        {item.task}
        <Button
          type="dashed"
          style={{ alignSelf: "flex-end" }}
          danger
          //   onClick={handleDelete}
        >
          <Popconfirm
            title="Are you sure you want to delete this task?"
            onConfirm={handleDelete}
            onCancel={cancel}
          >
            Delete
          </Popconfirm>
        </Button>
      </List.Item>
    </>
  );
}
