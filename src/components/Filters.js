import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";

const Filters = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <FilterByName
        filterByName={props.filterByName}
        errorMessage={props.errorMessage}
        handleFilterName={props.handleFilterName}
      ></FilterByName>
      <FilterBySpecie
        handleFilterSpecie={props.handleFilterSpecie}
      ></FilterBySpecie>
    </form>
  );
};

export default Filters;
