import React from "react";
import { Link } from "react-router-dom";
import "../css/Snack.css";

function Snack({ id, image }) {
  return (
    <Link to={{ pathname: `/snack/detail/${id}`, state: { id, image } }}>
      <div className="snack">
        <img id={id} src={image} width="170px" height="160px" alt="id"></img>
      </div>
    </Link>
  );
}

export default Snack;
