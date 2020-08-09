import React, { useState } from "react";
import { observer } from "mobx-react";

// component
import FabricItem from "./FabricItem";
import SeachBar from "../SearchBar";
import itemStore from "../../stores/itemStore";

// style
import { ListWrapper } from "./styles";

const List = ({ fabrics }) => {
  const [query, setQuery] = useState("");

  // const filterItems = fabrics.filter((item) =>
  //   item.name.toLocaleUpperCase().includes(query.toLocaleUpperCase())
  // );

  const itemsList = fabrics.map((item) => (
    <FabricItem item={item} key={item.id} />
  ));

  return (
    <>
      <SeachBar setQuery={setQuery} />
      <ListWrapper>{itemsList}</ListWrapper>
    </>
  );
};

export default observer(List);
