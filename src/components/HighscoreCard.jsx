import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../context/MyContext';

function HighscoreCard() {
  const { highscores, filter, setFilter } = useContext(MyContext);
  const [filtersApplied, setFiltersApplied] = useState(false);

  useEffect(() => {
    if (!filtersApplied) {
   
      setFilter(filter);
      setFiltersApplied(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersApplied, setFilter]);

  const handleCategoryChange = (e) => {
    setFilter({ ...filter, category: e.target.value });
    setFiltersApplied(false);
  };

  const handleWorldChange = (e) => {
    setFilter({ ...filter, world: e.target.value });
    setFiltersApplied(false);
  };

  const handleVocationChange = (e) => {
    setFilter({ ...filter, vocation: e.target.value });
    setFiltersApplied(false);
  };

  const categories = [
    'experience',
    'achievements',
    'axefighting',
    'charmpoints',
    'clubfighting',
    'distancefighting',
    'fishing',
    'fistfighting',
    'goshnarstaint',
    'loyaltypoints',
    'magiclevel',
    'shielding',
    'swordfighting',
    'dromescore',
    'bosspoints',
  ];

  const worlds = [
    'all',
    'Ambra',
    'Antica',
    'Astera',
    'Axera',
    'Belobra',
    'Bombra',
    'Bona',
    'Calmera',
    'Castela',
    'Celebra',
    'Celesta',
    'Collabra',
    'Damora',
    'Descubra',
    'Dia',
    'Epoca',
    'Esmera',
    'Etebra',
    'Ferobra',
    'Firmera',
    'Flamera',
    'Gentebra',
    'Gladera',
    'Gravitera',
    'Guerribra',
    'Harmonia',
    'Havera',
    'Honbra',
    'Impulsa',
    'Inabra',
    'Issobra',
    'Jacabra',
    'Jadebra',
    'Jaguna',
    'Kalibra',
    'Kardera',
    'Kendria',
    'Lobera',
    'Luminera',
    'Lutabra',
    'Menera',
    'Monza',
    'Mykera',
    'Nadora',
    'Nefera',
    'Nevia',
    'Obscubra',
    'Ombra',
    'Ousabra',
    'Pacera',
    'Peloria',
    'Premia',
    'Pulsera',
    'Quelibra',
    'Quintera',
    'Rasteibra',
    'Refugia',
    'Retalia',
    'Runera',
    'Secura',
    'Serdebra',
    'Solidera',
    'Syrena',
    'Talera',
    'Thyria',
    'Tornabra',
    'Ustebra',
    'Utobra',
    'Venebra',
    'Vitera',
    'Vunira',
    'Wadira',
    'Wildera',
    'Wintera',
    'Yonabra',
    'Yovera',
    'Zuna',
    'Zunera',
  ];

  const vocations = [
    'all',
    'knights',
    'paladins',
    'sorcerers',
    'druids',
  ];

  return (
    <div>
      <h2>Highscores</h2>

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={filter.category}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <label htmlFor="world">World:</label>
      <select id="world" value={filter.world} onChange={handleWorldChange}>
        {worlds.map((world) => (
          <option key={world} value={world}>
            {world}
          </option>
        ))}
      </select>

      <label htmlFor="vocation">Vocation:</label>
      <select id="vocation" value={filter.vocation} onChange={handleVocationChange}>
        {vocations.map((vocation) => (
          <option key={vocation} value={vocation}>
            {vocation}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Vocation</th>
            <th>World</th>
            <th>Level</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {highscores.highscore_list.length === 0 ? (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          ) : (
            highscores.highscore_list.map((player) => (
              <tr key={player.rank}>
                <td>{player.rank}</td>
                <td>{player.name}</td>
                <td>{player.vocation}</td>
                <td>{player.world}</td>
                <td>{player.level}</td>
                <td>{player.value}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HighscoreCard;