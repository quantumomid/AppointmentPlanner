import React from "react";

export const Tile = ({dataItem}) => {
    const tileElements = Object.values(dataItem).map((value, idx) => {
        return <p key={idx} className={idx===0 ? "tile-title" : "tile"}>{value}</p>
    })
  return (
    <div className="tile-container">
      {tileElements}
    </div>
  );
};