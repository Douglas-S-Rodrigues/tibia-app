import React, { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";

function CharacterCard() {
  const { character, fetchCharacter } = useContext(MyContext);

  useEffect(() => {
    fetchCharacter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  if (!character || !character.character) {
    return <div>Loading...</div>; 
  }

  const {
    name,
    sex,
    title,
    unlocked_titles,
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
      <h1>{name}'s Card</h1>
      <p>Sex: {sex}</p>
      <p>Title: {title}</p>
      <p>Unlocked Titles: {unlocked_titles}</p>
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
            <li key={index}>
              {achievement.name} - Grade: {achievement.grade} - Secret: {achievement.secret.toString()}
            </li>
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
