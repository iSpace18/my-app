import React, { useState } from 'react';
import Modal from './Modal'; // Импортируем компонент модального окна
import './style.css'; // Ваши стили

function App() {
    // Создаем состояние для контроля модального окна
  const [isModalOpen, setModalOpen] = useState(false);

  // Функция для открытия модального окна
  const openModal = () => {
    setModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <header className="header">
        <div className="logo">MAKEUPDATE</div>
        <nav className="nav">
          <a href="#">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b126e677546e02aa20f1fdb957ad3ac26dadb0b2f17a3d62fceb685a73d46b30?placeholderIfAbsent=true&apiKey=26bd9a38384c4232b7f8df003fc57b5b"></img>{" "}
            Главная
          </a>
          <a href="#">
            {" "}
            <img
              className="vxbxbvc"
              src="https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f"
            ></img>{" "}
            Уроки
          </a>
          <a href="#">
            {" "}
            <img
              className="qryt"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a6737baa52b6ba2a8cb4622713f564090ae4d367371b851819e5879c61eda62?placeholderIfAbsent=true&apiKey=26bd9a38384c4232b7f8df003fc57b5b"
            ></img>{" "}
            Пользователи
          </a>
          <a href="#">
            {" "}
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/628616b5526dcf2715ea838ecf261381b02b2174a18a027452fbca9a9e30df26?placeholderIfAbsent=true&apiKey=26bd9a38384c4232b7f8df003fc57b5b"></img>{" "}
            Сообщения
          </a>
        </nav>
        <nav className="nav2">
          <a href="#">
            <img
              className="proffoto"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46d1f3956fe11ec7ecbee35ab7d50f0af93879be722fea0e4326d837bc939a12?placeholderIfAbsent=true&apiKey=26bd9a38384c4232b7f8df003fc57b5b"
              alt="Иконка 1"
            />
          </a>
          <a href="#">
            <img
              className="qwe12"
              src="https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F82b8cb03c7744c04860b0617f6951d77?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F82b8cb03c7744c04860b0617f6951d77?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F82b8cb03c7744c04860b0617f6951d77?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F82b8cb03c7744c04860b0617f6951d77?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F82b8cb03c7744c04860b0617f6951d77?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F82b8cb03c7744c04860b0617f6951d77?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F82b8cb03c7744c04860b0617f6951d77?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F82b8cb03c7744c04860b0617f6951d77"
              alt="Иконка 2"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F1fd5a3158f2a46d899c81e70b3a7dd47?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F1fd5a3158f2a46d899c81e70b3a7dd47?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F1fd5a3158f2a46d899c81e70b3a7dd47?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F1fd5a3158f2a46d899c81e70b3a7dd47?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F1fd5a3158f2a46d899c81e70b3a7dd47?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F1fd5a3158f2a46d899c81e70b3a7dd47?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F1fd5a3158f2a46d899c81e70b3a7dd47?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F1fd5a3158f2a46d899c81e70b3a7dd47"
              alt="Иконка 3"
            />
          </a>
        </nav>
      </header>

      <div className="profile-container">
        <div className="profile-card">
          <img
            className="nnnn"
            src="https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F0ac6c0f83a464a87be0182025ee9deb1?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F0ac6c0f83a464a87be0182025ee9deb1?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F0ac6c0f83a464a87be0182025ee9deb1?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F0ac6c0f83a464a87be0182025ee9deb1?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F0ac6c0f83a464a87be0182025ee9deb1?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F0ac6c0f83a464a87be0182025ee9deb1?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F0ac6c0f83a464a87be0182025ee9deb1?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F0ac6c0f83a464a87be0182025ee9deb1"
          ></img>
          <img
            className="chel"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc9acba689f81ba9d2ecbc8f521b9ce65f76070b0a958433d0bbed78957a5941?placeholderIfAbsent=true&apiKey=26bd9a38384c4232b7f8df003fc57b5b"
            alt="Profile Picture"
          />
          <div className="info">
            <p className="adf"> Россия, Сочи</p>
            <img
              className="mayak"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/400663f641c642488465e118aec09e05f410b9eb6133ea4d51572e5c0eeb7fd7?placeholderIfAbsent=true&apiKey=26bd9a38384c4232b7f8df003fc57b5b"
            ></img>
            <img
              className="rrr"
              src="https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F6d764420350c4cb8b3c81a3d21a6172f"
            ></img>
            <p className="ppp">32</p>
            <img
              className="vbvb"
              src="https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F9ac2a06071a349d3864dda0e468b50f0?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F9ac2a06071a349d3864dda0e468b50f0?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F9ac2a06071a349d3864dda0e468b50f0?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F9ac2a06071a349d3864dda0e468b50f0?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F9ac2a06071a349d3864dda0e468b50f0?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F9ac2a06071a349d3864dda0e468b50f0?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F9ac2a06071a349d3864dda0e468b50f0?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F26bd9a38384c4232b7f8df003fc57b5b%2F9ac2a06071a349d3864dda0e468b50f0"
            ></img>
            <p className="z123zxc">100 203</p>
          </div>
          <button className="btnrgb">Редактировать</button>
          <button className="btn" onClick={openModal}>Опубликовать урок</button>
          <button className="btn">Опубликовать событие</button>
          <button className="btn">Опубликовать фото</button>
          <div className="info">
            <p>Обо мне:</p>
            <p>Заполните описание</p>
          </div>
        </div>
        <div className="profile-name">
          ИМЯ
          <br />
          ФАМИЛИЯ
        </div>
      </div>

      <div className="tabs2">
        <button>Мои уроки</button>
        <button>Доступ к урокам</button>
        <button>Избранные уроки</button>
        <button>Мои события</button>
      </div>

      <div className="tabs2">
        <button>Мое портфолио</button>
        <button>Подписчики</button>
        <button>Подписки</button>
        <button>Финансы</button>
      </div>

      <div className="content">У вас пока ничего нет</div>

      <div className="form-container">
        <input type="email" placeholder="Почта" />
        <input type="tel" placeholder="Telegram" />
        <input type="password" placeholder="Пароль" />
        <input type="password" placeholder="Подтвердите пароль" />
      </div>
       {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
    
  );
}

export default App;
