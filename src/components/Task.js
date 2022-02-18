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
  return <List.Item style={itemStyle}>{item.task}</List.Item>;
}
