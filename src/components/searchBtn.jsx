import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";

function SearchBtn(props) {
  const [query, setQuery] = useState("");
  console.log("hello", query);
  return (
    <div style={styles.container}>
      <Search style={styles.icon} color="#0c0c0c" size={25} />
      <input
        onChange={(e) => setQuery(e.currentTarget.value)}
        style={styles.input}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
const styles = {
  container: {
    width: 300,
    height: 40,
    backgroundColor: "#f8f4f4",
    borderRadius: 20,
    overflow: "hidden",
  },
  icon: { marginBottom: 5, paddingLeft: 10, marginRight: 5 },
  input: {
    border: "none",
    outline: "none",
    padding: 5,
    width: 260,
    backgroundColor: "#f8f4f4",
    fontSize: "1.2rem",
    color: "gray",
    fontWeight: "500",
  },
};

export default SearchBtn;
