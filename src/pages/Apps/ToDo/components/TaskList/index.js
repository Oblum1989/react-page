import CheckBox from "../CheckBox";

const TaskList = ({ list, setList }) => {
  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  const chk = list.map((item) => (
    <CheckBox key={item.id} data={item} onChange={onChangeStatus} />
  ));

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => item.done === false);
    setList(updateList);
  };

  return (
    <div className="todo-list">
      {list.length ? chk : "No tasks"}
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem} >Delete all done</button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
