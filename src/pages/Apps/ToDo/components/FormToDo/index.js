import { useState } from "react";

const FormToDo = ({handleAddItem}) => {
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    })
    setDescription("")
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="button pink" disabled={description ? "" : "disabled"}>
        Add
      </button>
    </form>
  );
};

export default FormToDo;
