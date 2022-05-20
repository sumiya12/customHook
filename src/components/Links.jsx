import { useState } from "react";

function Link({ name, isSelected, onClick }) {
  const [hover, setHover] = useState(false);
  const style = {
    backgroundColor: hover ? "black" : "grey",
    color: "white",
    textAlign: "center",
    outer: {
      width: "1000px",
      height: "150px",
    },
    border: isSelected ? "solid 5px green" : "none",
    inside: {
      textAlign: "center",
    },
  };
  return (
    <div
      className="me-4 w-25"
      style={style}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      onClick={onClick}
    >
      <span style={style.inside}>{name}</span>
    </div>
  );
}

export default Link;
