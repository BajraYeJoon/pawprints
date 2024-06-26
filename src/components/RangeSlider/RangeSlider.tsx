import React from "react";

const RangeSlider = (props) => {
  const percentage =
    (100 * (props.value - props.min)) / (props.max - props.min);

  return (
    <input
      className={`range-slider-input ${props.customClasses ? props.customClasses : ""}`}
      type="range"
      value={props.value}
      min={props.min}
      max={props.max}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  );
};

export { RangeSlider };
