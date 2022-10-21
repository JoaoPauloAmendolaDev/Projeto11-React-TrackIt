import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const calcColor = (percent, start, end) => {
  let a = percent / 100,
    b = (end - start) * a,
    c = b + start;

    return "hsl(" + c + ", 100%, 50%)"
};

const ReviewsBar = (props) => {
  const { score } = props;
  return (
    <CircularProgressbar
      value={score}
      text={`${value} %`}
      circleRatio={1}
      styles={{
        trail: {
          strokeLinecap: "butt",
          transform: "rotate(-126deg)",
          transformOrigin: "center center",
        },
        path: {
          strokeLinecap: "butt",
          transform: "rotate(-126deg)",
          transformOrigin: "center center",
          stroke: calcColor(value, 0, 120),
        },
        text: {
          fill: "#ddd",
        },
      }}
      strokeWidth={10}
    />
  );
};

export default ReviewsBar