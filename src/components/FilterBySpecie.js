const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilterSpecie(ev.target.value);
  };

  return (
    <div className="container--select">
      <label className="select__msg">Search by species</label>
      <select
        className="select__specie"
        name="specie"
        id="specie"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Human">Human πΆπ»ββοΈ</option>
        <option value="Alien">Alien π½</option>
      </select>
    </div>
  );
};

export default FilterBySpecie;
