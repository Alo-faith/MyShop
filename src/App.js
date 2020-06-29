import React from "react";

import items from "./items";
import styles from "./styles";

function App() {
  const itemsList = items.map((item) => (
    <div style={styles.list} key={items.id}>
      <div style={styles.space}>
        <img style={styles.pic} src={item.image} alt={item.name} />
        <p> {item.name} </p>
        <p> {item.price} KD / PER METRE </p>
      </div>
    </div>
  ));
  return (
    <div>
      <div>
        <h1 style={styles.header}> My Shop </h1>
        <h2 style={styles.header}>Fabric Shop</h2>
        <img
          src="https://lh3.googleusercontent.com/proxy/MBrn7wQ2JuCWp4xbU5garmPHcnLYrehGrcN7x5Gx5Hn9ODTrNHizfgoZUe_jarn3oINLKuN5z3MDjRx3-_YWi2lxiptfdjXEsSySOsSZO5WLXVt6MF15LFAQTqIq64_DyASB"
          alt="Logo"
          style={styles.logo}
        />
        <br></br>
      </div>

      <div styles={styles.list}>{itemsList}</div>
    </div>
  );
}
export default App;
