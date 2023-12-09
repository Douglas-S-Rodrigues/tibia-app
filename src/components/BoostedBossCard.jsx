import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function BoostedBoosCard() {
  const { bossesInfo } = useContext(MyContext);
  const featuredBosses = bossesInfo.boostable_bosses.boostable_boss_list.filter((boss) => boss.featured);

  return (
    <div>
      <div>
        <h2>Today's boosted Boss</h2>
        <div>
          {featuredBosses.map((boss) => (
            <div key={boss.name}>
              <img src={boss.image_url} alt={boss.name} />
              <p>{boss.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoostedBoosCard;