import React, { useState } from "react";
import { observer } from "mobx-react";

// Stores
import itemStore from "../stores/itemStore";

// component
import FabricItem from "./FabricItem";
import SeachBar from "./SeacrchBar";
import AddButton from "./buttons/AddButton";

// style
import { ListWrapper } from "../styles";

const List = () => {
  const [query, setQuery] = useState("");

  const filterItems = itemStore.items.filter((item) =>
    item.name.toLocaleUpperCase().includes(query.toLocaleUpperCase())
  );

  const itemsList = filterItems.map((item) => (
    <FabricItem item={item} key={item.id} />
  ));

  return (
    <>
      <SeachBar setQuery={setQuery} />

      <ListWrapper>{itemsList}</ListWrapper>
      <AddButton />
    </>
  );
};

export default observer(List);
