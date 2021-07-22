import React from "react";
import { Link } from "react-router-dom";
import "../css/Snack.css";

function Snack({ id, image, path, snack }) {
  return (
    <Link
      to={{
        pathname: `/snack/detail/${id}`,
        state: { id, image, path, snack },
      }}
    >
      <div className="snack">
        <img
          id={id}
          src={`http://localhost:3000/images/${path}`}
          width="170px"
          height="160px"
          alt="id"
        ></img>
      </div>
    </Link>
  );
}

export default Snack;
