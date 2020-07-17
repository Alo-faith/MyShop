import React from "react";

// style
import { SearchStyle } from "./styles";

const SearchBar = (props) => {
  return (
    <SearchStyle
      placeholder="Search for a fabic name"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};
export default SearchBar;
