import { useState } from "react";
import FormToDo from "./components/FormToDo";
import TaskList from "./components/TaskList";
import "./styles.css"

const ToDo = () => {
  const [list, setList] = useState([]);
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <>
      <FormToDo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList}/>
    </>
  );
};

export default ToDo;
