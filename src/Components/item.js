import React from "react";
import "./item.css";
export default function Item(props) {
  const [isChecked, toggleIsChecked] = React.useState(0);
  const toHide = props.hide;
  let name = "";
  if (isChecked && toHide) name = "Hide";
  else if (isChecked) name = "LineOver";
  return (
    <div className={`${name} member`}>
      <input
        type="checkbox"
        id="isChecked"
        checked={isChecked}
        onChange={(e) => toggleIsChecked(e.target.checked)}
        name="isChecked"
      />
      {props.value}
      <hr />
    </div>
  );
}
