import './style.css';

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo">MAKEUPDATE</div>
        <nav className="nav">
          <a href="#">Главная</a>
          <a href="#">Уроки</a>
          <a href="#">Пользователи</a>
          <a href="#">Сообщения</a>
        </nav>
        <nav className="nav2">
          <a href="#">
            <img src="group 82.png" alt="Иконка 1" />
          </a>
          <a href="#">
            <img src="Group 83.png" alt="Иконка 2" />
          </a>
          <a href="#">
            <img src="Group 84.png" alt="Иконка 3" />
          </a>
        </nav>
      </header>

      <div className="profile-container">
        <div className="profile-card">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc9acba689f81ba9d2ecbc8f521b9ce65f76070b0a958433d0bbed78957a5941?placeholderIfAbsent=true&apiKey=26bd9a38384c4232b7f8df003fc57b5b"
            alt="Profile Picture"
          />
          <div className="info">
            <p>Россия, Сочи</p>
            <p>
              <span>
                <img className="BEBE" src="image.png" alt="Иконка возраста" />
              </span>
              32
            </p>
            <p>100 203 подписчиков</p>
          </div>
          <button className="btnrgb">Редактировать</button>
          <button className="btn">Опубликовать урок</button>
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

      <div className="tabs">
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
    </div>
  );
}

export default App;
