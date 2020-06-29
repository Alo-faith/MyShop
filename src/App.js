import React from "react";
import styles from "./styles";
// Components
import FabricList from "./components/FabricList";

function App() {
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

      <FabricList />
    </div>
  );
}
export default App;
