import React from 'react';
import { useParams } from 'react-router-dom';
import defImage from '../assets/placeholder.png';
import './model.css';

function Model({ arrayData, type }) {
  const { id } = useParams();
  const data = arrayData?.[id - 1];

  if (!data) return <p>Данные не найдены</p>;

  const {
    name,
    description,
    image,
    investment,
    price,
    stage,
    industry,
    goals,
    resources,
    experience,
    specialization,
    interests,
    region,
    audience,
  } = data;

  return (
    <div className="model-container">
      <img
        src={image || defImage}
        alt={name}
        className="model-image"
      />

      <div className="model-info">
        <h2>{name}</h2>
        <p>{description}</p>
        {investment && (
          <p>
            <strong>
              {type === 'investor' ? 'Готов инвестировать:' : 'Требуемые инвестиции:'}
            </strong> {investment}
          </p>
        )}
        {price && <p><strong>Цена:</strong> {price}</p>}
        {stage && <p><strong>Стадия:</strong> {stage}</p>}
        {industry && <p><strong>Отрасль:</strong> {industry}</p>}
        {goals && <p><strong>Цели:</strong> {goals}</p>}
        {resources && <p><strong>Доступные ресурсы:</strong> {resources}</p>}
        {experience && <p><strong>Опыт инвестирования:</strong> {experience}</p>}
        {specialization && <p><strong>Специализация:</strong> {specialization}</p>}
        {interests && <p><strong>Интересующие отрасли:</strong> {interests}</p>}
        {region && <p><strong>Регион:</strong> {region}</p>}
        {audience && <p><strong>Целевая аудитория:</strong> {audience}</p>}

        <button className="model-message-btn">Написать</button>
      </div>
    </div>
  );
}

export default Model;
