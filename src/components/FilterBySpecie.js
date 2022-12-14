const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilterSpecie(ev.target.value);
  };

  return (
    <select name="specie" id="specie" onChange={handleChange}>
      <option value="all">Todas</option>
      <option value="Human">Persona</option>
      <option value="Alien">Alien</option>
    </select>
  );
};

export default FilterBySpecie;
