import React from "react";
// styles
import styles from "../styles";
// Data
import items from "../items";
// Fabric Items
import FabricItems from "./FabricItems";

const FabricList = () => {
  const itemsList = items.map((item) => (
    <FabricItems item={item} key={item.id} />
  ));

  return <div style={styles.list}>{itemsList}</div>;
};

export default FabricList;
