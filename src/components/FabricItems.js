import React from "react";
// styles
import styles from "../styles";

const FabricItems = (props) => {
  return (
    <div>
      <img src={props.item.image} alt={props.item.name} style={styles.pic} />
      <p> {props.item.name} </p>
      <p> {props.item.price} KD / PER METRE </p>
    </div>
  );
};
export default FabricItems;
