const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilterSpecie(ev.target.value);
  };

  return (
    <select name="specie" id="specie" onChange={handleChange}>
      <option value="all">All</option>
      <option value="Human">Human</option>
      <option value="Alien">Alien</option>
    </select>
  );
};

export default FilterBySpecie;
