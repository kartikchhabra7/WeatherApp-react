import React from "react";

function Input({ value, onChange }) {
  return (
    <div className="card-img-overlay">
      <div className="input-group mb-4 w-75 mx-auto">
        <input
          type="search"
          className="form-control"
          placeholder="Search Weather..."
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;
