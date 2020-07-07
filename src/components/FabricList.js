import React, { useState } from "react";
import { Link } from "react-router-dom";

// component
import FabricItem from "./FabricItem";

import SeachBar from "./SeacrchBar";
// style
import { ListWrapper, NavButton } from "../styles";

const List = (props) => {
  const [query, setQuery] = useState("");
  const filterItems = props.items.filter((item) =>
    item.name.toLocaleUpperCase().includes(query.toLocaleUpperCase())
  );

  const itemsList = filterItems.map((item) => (
    <FabricItem item={item} key={item.id} deleteItem={props.deleteItem} />
  ));

  return (
    <>
      <Link to="/">
        <NavButton>Home</NavButton>
      </Link>

      <SeachBar setQuery={setQuery} />
      <ListWrapper>{itemsList}</ListWrapper>
    </>
  );
};

export default List;
