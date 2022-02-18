import { useState, useEffect } from "react";
import { List } from "antd";
import Task from "./Task";

const fakeTasks = [
  { id: 1, task: "Buy Milk", done: false },
  { id: 2, task: "Eat Chips", done: false },
  { id: 3, task: "Eat Cereal", done: false },
  { id: 4, task: "Go Ham", done: false },
  { id: 5, task: "Buy Cheese", done: false },
];
export default function TaskList() {
  const [tasks, setTasks] = useState(fakeTasks);
  return (
    <List
      bordered
      dataSource={fakeTasks}
      renderItem={(item) => <Task item={item} />}
    />
  );
}
