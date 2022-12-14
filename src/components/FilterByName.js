const FilterByName = (props) => {
  const handleInput = (ev) => {
    props.handleFilterName(ev.target.value);
  };
  return (
    <div className="container--input">
      <label className="input__msg">Enter a character here</label>
      <input
        className="input__search"
        type="text"
        placeholder="Example: Rick Sanchez"
        onInput={handleInput}
        value={props.filterByName}
      />
      <p className="input__search--errorMsg">{props.errorMessage}</p>
    </div>
  );
};

export default FilterByName;
