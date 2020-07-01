import React, { useState } from "react";

// Data
import items from "../items";

// component
import FabricItem from "./FabricItem";

// style
import { ListWrapper } from "../styles";

const List = () => {
  const [_items, setItems] = useState(items);
  const deleteItem = (itemId) => {
    const updatedItem = _items.filter((item) => item.id !== +itemId);
    setItems(updatedItem);
  };

  const itemsList = _items.map((item) => (
    <FabricItem item={item} key={item.id} deleteItem={deleteItem} />
  ));

  return <ListWrapper>{itemsList}</ListWrapper>;
};

export default List;
