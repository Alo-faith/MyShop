import React, { useState } from "react";

// Data
import items from "../items";

// component
import FabricItem from "./FabricItem";

import SeachBar from "./SeacrchBar";
// style
import { ListWrapper } from "../styles";

const List = (props) => {
  const [query, setQuery] = useState("");
  const filterItems = props.items.filter((item) => item.name.includes(query));

  const itemsList = filterItems.map((item) => (
    <FabricItem
      item={item}
      key={item.id}
      deleteItem={props.deleteItem}
      selectItem={props.selectItem}
    />
  ));

  return (
    <>
      <SeachBar setQuery={setQuery} />
      <ListWrapper>{itemsList}</ListWrapper>
    </>
  );
};

export default List;
