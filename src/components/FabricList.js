import React from "react";

// Data
import items from "../items";

// component
import FabricItem from "./FabricItem";

// style
import { ListWrapper } from "../styles";

const List = () => {
  const itemsList = items.map((item) => (
    <FabricItem item={item} key={item.id} />
  ));

  return <ListWrapper>{itemsList}</ListWrapper>;
};

export default List;
