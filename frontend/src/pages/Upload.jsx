import React, { useState } from 'react';
import './Upload.css';

function Upload() {
  // Пример: роль определяется после авторизации (здесь просто для примера)
  const userRole = 'investor'; // 'investor', 'offer', 'startup'

  const [formData, setFormData] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Отправка данных:', userRole, formData);
  };

  const renderFormFields = () => {
    switch (userRole) {
      case 'startup':
        return (
          <>
            <div className="upload-field">
              <label>Название проекта</label>
              <input type="text" name="name" onChange={handleChange} placeholder="Введите название проекта" required />
            </div>
            <div className="upload-field">
              <label>Краткое описание</label>
              <textarea name="shortDescription" rows={2} onChange={handleChange} placeholder="Суть идеи в 1-2 предложениях" required />
            </div>
            <div className="upload-field">
              <label>Полное описание</label>
              <textarea name="fullDescription" rows={4} onChange={handleChange} placeholder="Расширенная информация о проекте, цели, особенности, и т.п." required />
            </div>
            <div className="upload-field">
              <label>Команда</label>
              <input type="text" name="team" onChange={handleChange} placeholder="Укажите основателей и ключевых участников" />
            </div>
            <div className="upload-field">
              <label>Сайт / демо</label>
              <input type="text" name="website" onChange={handleChange} placeholder="Ссылка на лендинг, прототип или видео" />
            </div>
            <div className="upload-field">
              <label>Категория</label>
              <input type="text" name="category" onChange={handleChange} placeholder="Например: IT, здравоохранение, финтех" />
            </div>
            <div className="upload-field">
              <label>Целевая аудитория</label>
              <input type="text" name="audience" onChange={handleChange} placeholder="Кому адресован ваш продукт" />
            </div>
            <div className="upload-field">
              <label>Запрашиваемые инвестиции</label>
              <input type="text" name="investment" onChange={handleChange} placeholder="Сколько средств нужно и зачем" />
            </div>
          </>
        );
      case 'offer':
        return (
          <>
            <div className="upload-field">
              <label>Название услуги</label>
              <input type="text" name="name" onChange={handleChange} placeholder="Название вашей услуги" required />
            </div>
            <div className="upload-field">
              <label>Краткое описание</label>
              <textarea name="shortDescription" rows={2} onChange={handleChange} placeholder="Суть услуги, что предлагаете" required />
            </div>
            <div className="upload-field">
              <label>Подробности</label>
              <textarea name="details" rows={4} onChange={handleChange} placeholder="Технологии, оборудование, формат работы" required />
            </div>
            <div className="upload-field">
              <label>Примеры работ</label>
              <input type="text" name="examples" onChange={handleChange} placeholder="Примеры ваших работ или ссылок" />
            </div>
            <div className="upload-field">
              <label>Сроки исполнения</label>
              <input type="text" name="timeframe" onChange={handleChange} placeholder="Среднее время выполнения" />
            </div>
            <div className="upload-field">
              <label>Стоимость / расценки</label>
              <input type="text" name="pricing" onChange={handleChange} placeholder="Стоимость ваших услуг" />
            </div>
            <div className="upload-field">
              <label>Место предоставления услуг</label>
              <input type="text" name="geography" onChange={handleChange} placeholder="Где предоставляете услугу" />
            </div>
          </>
        );
      case 'investor':
        return (
          <>
            <div className="upload-field">
              <label>Имя</label>
              <input type="text" name="name" onChange={handleChange} placeholder="Введите ваше имя" required />
            </div>
            <div className="upload-field">
              <label>Опыт</label>
              <textarea name="experience" rows={3} onChange={handleChange} placeholder="Опишите ваш опыт, участие в проектах" required />
            </div>
            <div className="upload-field">
              <label>Инвестиционные интересы</label>
              <input type="text" name="interests" onChange={handleChange} placeholder="Во что вы готовы инвестировать" />
            </div>
            <div className="upload-field">
              <label>Диапазон инвестиций</label>
              <input type="text" name="budget" onChange={handleChange} placeholder="От и до" />
            </div>
            <div className="upload-field">
              <label>Профиль / сайт</label>
              <input type="url" name="profile" onChange={handleChange} placeholder="Ссылка на ваш профиль или сайт" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const roleTitles = {
    investor: 'Разместить себя как инвестора',
    startup: 'Разместить стартап',
    offer: 'Разместить услугу',
  };

  return (
    <div className="upload-page">
      <div className="upload-container">
        <h2>{roleTitles[userRole]}</h2>
        <form onSubmit={handleSubmit}>{renderFormFields()}<button type="submit">Отправить</button></form>
      </div>
    </div>
  );
}

export default Upload;