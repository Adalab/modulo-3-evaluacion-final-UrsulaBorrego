import FilterByName from "./FilterByName";

const Filters = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <FilterByName
        filterByName={props.filterByName}
        handleFilterName={props.handleFilterName}
      ></FilterByName>
    </form>
  );
};

export default Filters;
