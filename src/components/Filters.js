import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import FilterByEpisodes from "./FilterByEpisodes";

const Filters = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <FilterByName
        filterByName={props.filterByName}
        errorMessage={props.errorMessage}
        handleFilterName={props.handleFilterName}
      ></FilterByName>
      <FilterByEpisodes
        filterByEpisodes={props.filterByEpisodes}
        handleFilterEpisodes={props.handleFilterEpisodes}
      ></FilterByEpisodes>
      <FilterBySpecie
        handleFilterSpecie={props.handleFilterSpecie}
      ></FilterBySpecie>
    </form>
  );
};

export default Filters;
