import React from "react";

const styles = {
  header: {
    textAlign: "center",
  },
  logo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  pic: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "300px",
    height: "300px",
    border: "2px solid #555",
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
  },
  space: {
    marginLeft: "2px",
  },
};
function App() {
  return (
    <div>
      <div>
        <h1 style={styles.header}> My Shop </h1>
        <h2 style={styles.header}>Fabric Store</h2>
        <img
          src="https://lh3.googleusercontent.com/proxy/MBrn7wQ2JuCWp4xbU5garmPHcnLYrehGrcN7x5Gx5Hn9ODTrNHizfgoZUe_jarn3oINLKuN5z3MDjRx3-_YWi2lxiptfdjXEsSySOsSZO5WLXVt6MF15LFAQTqIq64_DyASB"
          alt="Logo"
          style={styles.logo}
        />
        <br></br>
      </div>
      <div style={styles.list}>
        <div style={styles.space}>
          <img
            src="https://www.tinsmiths.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/i/linen-upholstery-fabric1-sa.jpg"
            alt="Mustard"
            style={styles.pic}
          />
          <p> LINEN LAVENHAM - MUSTARD</p>
          <p>5 KD </p>
          <p>PER METRE</p>
        </div>
        <div style={styles.space}>
          <img
            src="https://www.textileexpressfabrics.co.uk/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/o/r/organic_cotton_2.jpg"
            alt="Cotton"
            style={styles.pic}
          />
          <p> Organic Cotton</p>
          <p>4 KD </p>
          <p>PER METRE</p>
        </div>
        <div style={styles.space}>
          <img
            src="https://5.imimg.com/data5/WP/OX/MY-4016/polster-cotton-fabric-500x500.jpg"
            alt="Black"
            style={styles.pic}
          />
          <p> Black Plain Polyester Cotton Fabric</p>
          <p>6 KD </p>
          <p>PER METRE</p>
        </div>
      </div>
    </div>
  );
}
export default App;
