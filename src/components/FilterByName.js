const FilterByName = (props) => {
  const handleInput = (ev) => {
    props.handleFilterName(ev.target.value);
  };
  return (
    <input
      className="input__search"
      type="text"
      placeholder="Escribe aquí un personaje"
      onInput={handleInput}
      onSubmit={props.handleSubmit}
      value={props.filterByName}
    />
  );
};

export default FilterByName;
