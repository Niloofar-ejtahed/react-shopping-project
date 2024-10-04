import React from "react";

export default function Rating({ rate }) {

  const mainRate = Math.ceil(rate);
  const ratedList = Array.from(new Array(mainRate));
  
  return (
    <div className="rating rating-xs">
      {ratedList?.map((item, index) => {
        return (
          <div key={index + 'rating'}>
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        )
      })}
    </div>
  );
}
