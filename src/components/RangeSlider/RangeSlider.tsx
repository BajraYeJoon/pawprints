import React from "react";
import "./slider.css";

type SliderProps = {
  value: number;
};

const RangeSlider = (props: SliderProps) => {
  const min = 0;
  const max = 100;
  const { value } = props;
  const percentage = ((value - min) / (max - min)) * 100;
  const leftPosition = `calc(${percentage}% `;

  const style: React.CSSProperties = {
    "--thumb-position": leftPosition,
  } as React.CSSProperties;

  return (
    <input
      className="range-slider-input"
      type="range"
      value={value}
      min={min}
      max={max}
      style={style}
      data-percentage={`${value}%`}
    />
  );
};

export { RangeSlider };
