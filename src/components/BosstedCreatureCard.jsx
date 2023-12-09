import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function BoostedCreatureCard() {
  const { creaturesInfo } = useContext(MyContext);

  const boostedCreature = creaturesInfo.creatures.boosted.featured ? creaturesInfo.creatures.boosted : null;

  if (!boostedCreature) {
    return null;
  }

  return (
    <div>
      <h2>Today's boosted creature</h2>
      <div>
        <img src={boostedCreature.image_url} alt={boostedCreature.name} />
        <p>{boostedCreature.name}</p>
      </div>
    </div>
  );
}

export default BoostedCreatureCard;