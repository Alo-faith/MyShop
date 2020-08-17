import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";
// component
import FabricItem from "./FabricItem";
import SeachBar from "../SearchBar";
import itemStore from "../../stores/itemStore";

// style
import { ListWrapper } from "./styles";

// store
import authStore from "../../stores/authStore";

const List = ({ fabrics }) => {
  const [query, setQuery] = useState("");

  // if (!authStore.user || authStore.user.role !== "admin")
  //   return <Redirect to="/" />;

  const filterItems = fabrics.filter((item) =>
    item.name.toLocaleUpperCase().includes(query.toLocaleUpperCase())
  );

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
