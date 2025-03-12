import React from "react";

const ShoeCard = ({ imgURL, changeBigShoe, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoe(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div>
        <img src={imgURL.thumbnail} />
      </div>
    </div>
  );
};

export default ShoeCard;
