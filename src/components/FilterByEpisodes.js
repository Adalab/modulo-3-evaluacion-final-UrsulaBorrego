const FilterByEpisodes = (props) => {
  const handleChange = (ev) => {
    props.handleFilterEpisodes(ev.target.value);
  };
  return (
    <div className="container--input">
      <label className="input__msg">Enter a number of episodes here</label>
      <input
        className="input__search"
        type="number"
        onChange={handleChange}
        value={props.filterByEpisodes}
      />
    </div>
  );
};

export default FilterByEpisodes;
