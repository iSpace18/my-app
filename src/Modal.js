import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Кнопка закрытия модального окна */}
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        
        {/* Заголовок */}
        <h2 className="modal-title">Редактируйте информацию урока</h2>

        {/* Прогресс обучения */}
        <div className="progress-bar">
          <div className="progress-step completed"></div>
          <div className="progress-step completed"></div>
          <div className="progress-step"></div>
          <div className="progress-step"></div>
        </div>

        {/* Название урока */}
        <div className="input-group">
          <label className="input-label">Название видеоролика</label>
          <input 
            type="text" 
            className="input-field" 
            value="Укладка волос в необычном стиле" 
            readOnly 
          />
          <div className="input-counter">31/100</div>
        </div>

        {/* Описание ролика */}
        <div className="input-group">
          <label className="input-label">Описание ролика</label>
          <textarea 
            className="input-field" 
            readOnly 
            rows="4"
          >
            Чтобы создать красивую укладку волос феном и не повредить локоны, специалисты советуют придерживаться простых правил:
            Сначала просушите волосы естественным путем – в течение 10-15 минут. Так вы подготовите пряди к воздействию горячего воздуха.
          </textarea>
        </div>

        {/* Параметры голосового перевода урока */}
        <div className="translation-params">
          <h3>Параметры голосового перевода урока</h3>
          <p>Выберите голос, который будет вас озвучивать:</p>
          <div className="voice-options">
            <button className="voice-button">👨‍🦰</button>
            <button className="voice-button">👩‍🦱</button>
          </div>
          <p>С какого языка переводится урок:</p>
          <div className="language-options">
            <button className="language-button">🇷🇺 Русский</button>
            <button className="language-button">🇬🇧 English</button>
            <button className="language-button">🇪🇸 Español</button>
          </div>
          <p>Языки, на которые будет переводиться урок:</p>
          <div className="target-languages">
            <button className="language-button">🇷🇺 Русский</button>
            <button className="language-button">🇬🇧 English</button>
            <button className="language-button">🇪🇸 Español</button>
            <button className="language-button">🇦🇪 العربية</button>
          </div>
        </div>

        {/* Установка стоимости урока */}
        <div className="input-group">
          <label className="input-label">Установите стоимость урока</label>
          <div className="price-input">
            <input type="text" className="input-field" value="399" readOnly />
            <span className="currency-label">Руб.</span>
          </div>
        </div>

        {/* Кнопка "Далее" */}
        <button className="next-button">Далее</button>
      </div>
    </div>
  );
};

export default Modal;