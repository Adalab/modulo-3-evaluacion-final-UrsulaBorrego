const FilterByName = (props) => {
  const handleInput = (ev) => {
    props.handleFilterName(ev.target.value);
  };
  return (
    <>
      <input
        className="input__search"
        type="text"
        placeholder="Example: Rick Sanchez"
        onInput={handleInput}
        value={props.filterByName}
      />
      <p>{props.errorMessage}</p>
    </>
  );
};

export default FilterByName;
