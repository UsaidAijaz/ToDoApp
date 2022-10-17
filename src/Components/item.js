import React from "react";
import "./item.css";
export default function Item(props) {
  const [isChecked, toggleIsChecked] = React.useState(0);
  return (
    <div className={isChecked ? "LineOver" : ""}>
      <input
        type="checkbox"
        id="isChecked"
        checked={isChecked}
        onChange={(e) => toggleIsChecked(e.target.checked)}
        name="isChecked"
      />

      {props.value}
    </div>
  );
}
