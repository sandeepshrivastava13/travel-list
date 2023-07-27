import React from "react";

const Stats = ({ totalItems, packedCount = 0 }) => {
  const packedItemPer =
    !!totalItems && !!packedCount
      ? (packedCount / totalItems) * 100
      : packedCount;

  if (!totalItems)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  else {
    return (
      <footer className="stats">
        {totalItems !== packedCount ? (
          <em>
            💼 You have {totalItems} items in your list, and you already packed{" "}
            {packedCount} ({packedItemPer.toFixed(2)})%
          </em>
        ) : (
          `You got everything! Ready to go✈️`
        )}
      </footer>
    );
  }
};

export default Stats;
