import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function HomeCard() {
  const { news } = useContext(MyContext);

  const newsCount = news.slice(0, 10);

  return (
    <div>
      <h1>Últimas Notícias</h1>
      <div className="container-noticias">
        {newsCount.map((item) => (
          <div key={item.id} className="item-noticia">
            <h2>{item.category}</h2>
            <p>{item.news}</p>
            <p>Data: {item.date}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Ler mais
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCard;