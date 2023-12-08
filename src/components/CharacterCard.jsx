import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function CharacterCard() {
  const { character, result, search, setResult, fetchCharacter } = useContext(MyContext);

  const fetchData = async () => {
    if (result && search.trim() !== '') {
      try {
        await fetchCharacter(search);
        setResult(true);
      } catch (error) {
        console.error('Erro ao obter dados do personagem:', error);
        setResult(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  if (search.trim() === '' || !result) {
    return null;
  }

  if (!character || !character.character) {
    return 'Character not found.';
  }

  const {
    name,
    sex,
    title,
    unlocked_titles,
    vocation,
    level,
    achievement_points,
    world,
    residence,
    married_to,
    guild,
    last_login,
    account_status,
    comment,
  } = character.character;

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Sex: {sex}</p>
      <p>Title: {title}</p>
      <p>Unlocked Titles: {unlocked_titles}</p>
      <p>Vocation: {vocation}</p>
      <p>Level: {level}</p>
      <p>Achievement Points: {achievement_points}</p>
      <p>World: {world}</p>
      <p>Residence: {residence}</p>
      <p>Married To: {married_to}</p>

      {guild && (
        <p>
          Guild: {guild.name}, Rank: {guild.rank}
        </p>
      )}

      <p>Last Login: {last_login}</p>
      <p>Account Status: {account_status}</p>
      <p>Comment: {comment}</p>

      <h2>Achievements</h2>
      <ul>
        {character.achievements &&
          character.achievements.map((achievement, index) => (
            <li key={index}>{achievement.name}</li>
          ))}
      </ul>

      <h2>Account Information</h2>
      <p>Created: {character.account_information && character.account_information.created}</p>
      <p>Loyalty Title: {character.account_information && character.account_information.loyalty_title}</p>

      <h2>Other Characters</h2>
      <ul>
        {character.other_characters &&
          character.other_characters.map((otherCharacter, index) => (
            <li key={index}>
              {otherCharacter.name} - World: {otherCharacter.world} - Status: {otherCharacter.status}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CharacterCard;
