import React from "react";
import {Tile} from "./Tile"

export const TileList = ({data}) => {
    const tiles = data.map((dataItem, idx) => {
        return <Tile key={idx} dataItem={dataItem} />
    })
  return (
    <div>
        {tiles}
    </div>
  );
};