import { List } from "antd";
export default function Task({ item }) {
  return <List.Item>{item.task}</List.Item>;
}
