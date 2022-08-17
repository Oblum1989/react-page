const CheckBox = ({onChange, data: {id, done, description}}) => {
  return (
    <>
      <label className="todo new-item">
        <input
          className="todo__state"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className="todo__text">{description}</div>
      </label>
    </>
  );
};

export default CheckBox;
