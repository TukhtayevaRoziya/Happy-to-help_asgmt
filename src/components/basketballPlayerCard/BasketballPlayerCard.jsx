import React from "react";
import style from "./BasketballPlayerCard.module.css";

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className={style.player_card}>
      <div className={style.profile}>
        <div className={style.image}>
          <div className={style.circle_1}></div>
          <div className={style.circle_2}></div>
          <img src={image} alt={name} />
        </div>
        <div className={style.player_name}>{name}</div>
        <div className={style.player_position}>{position}</div>
      </div>

      <div className={style.player_stats}>
        <div className={style.box}>
          <span className={style.value}>{stats.pointsPerGame}</span>
          <span className={style.parameter}>Points per Game</span>
        </div>
        <div className={style.box}>
          <span className={style.value}>{stats.assistsPerGame}</span>
          <span className={style.parameter}>Assists per Game</span>
        </div>
        <div className={style.box}>
          <span className={style.value}>{stats.reboundsPerGame}</span>
          <span className={style.parameter}>Rebounds per Game</span>
        </div>
      </div>
    </div>
  );
};
export default BasketballPlayerCard;
