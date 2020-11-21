import React, { useState } from 'react';
import './style.css';
//import user01 from './assets/img/user01.png';

//Vytvořte komponentu Joke, která zobrazuje jeden vtip. Tato komponenta bude sídlit ve vlastní složce se všemi potřebnými CSS styly a obrázky. Komponenta Joke nechť má pět props: userId, userName, text, likes, dislikes.

export const Joke = (props) => {
  const [likesUp, setLikesUp] = useState(props.likes);
  const [likesDown, setLikesDown] = useState(props.dislikes);

  const handleClickUp = () => {
    setLikesUp(likesUp + 1);
  };
  const handleClickDown = () => {
    setLikesDown(likesDown + 1);
  };

  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img
                className="user-avatar"
                src={`/assets/img/${props.id}.png`}
              />
              <p className="user-name">{props.name}</p>
            </div>

            <p className="joke__text">{props.text}</p>
          </div>
          <div className="joke__likes">
            <button
              id="btn-up"
              className="btn-like btn-like--up"
              onClick={handleClickUp}
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {likesUp}
            </span>
            <button
              id="btn-down"
              className="btn-like btn-like--down"
              onClick={handleClickDown}
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {likesDown}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
