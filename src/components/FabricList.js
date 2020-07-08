import React, { useState } from "react";
import { Link } from "react-router-dom";

// component
import FabricItem from "./FabricItem";
import SeachBar from "./SeacrchBar";

// style
import { ListWrapper } from "../styles";

const List = ({ items, deleteItem }) => {
  const [query, setQuery] = useState("");

  const filterItems = items.filter((item) =>
    item.name.toLocaleUpperCase().includes(query.toLocaleUpperCase())
  );

  const itemsList = filterItems.map((item) => (
    <FabricItem item={item} key={item.id} deleteItem={deleteItem} />
  ));

  return (
    <>
      <SeachBar setQuery={setQuery} />

      <ListWrapper>{itemsList}</ListWrapper>
    </>
  );
};

export default List;
