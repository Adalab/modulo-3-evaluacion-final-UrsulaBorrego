import FilterByName from "./FilterByName";

const Filters = (props) => {
  return (
    <form>
      <FilterByName
        filterByName={props.filterByName}
        handleFilterName={props.handleFilterName}
        handleSubmit={props.handleSubmit}
      ></FilterByName>
    </form>
  );
};

export default Filters;
