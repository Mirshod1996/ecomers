import React from "react";
import "./NoteFound.scss";
import { Link } from "react-router-dom";

const NoteFound = () => {
  return (
    <div className="error">
      <span className="error-btn">
        <Link to="/">Go home</Link>
      </span>
    </div>
  );
};

export default NoteFound;
