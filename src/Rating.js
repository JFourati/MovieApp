import React from "react";

const Rating = ({ count, onChangeRating = () => {} }) => {
  let starsRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      starsRating.push(
        <span onClick={() => onChangeRating(i + 1)} key={i}>
          ★
        </span>
      );
    } else {
      starsRating.push(
        <span onClick={() => onChangeRating(i + 1)} key={i}>
          ☆
        </span>
      );
    }
  }
  return <div>{starsRating}</div>;
};

export default Rating;
