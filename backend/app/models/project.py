from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.models.rwmodel import RWModel
from app.models.common import DateTimeModelMixin
from datetime import datetime

class Project(RWModel, DateTimeModelMixin):
    __tablename__ = 'project'

    id = Column(Integer, primary_key=True)
    startup_id = Column(Integer, ForeignKey("startup.id"), nullable=False)  # Связь с таблицей startup
    name = Column(String(255), nullable=False)  # Название проекта
    description = Column(Text)  # Описание проекта

    startup = relationship("Startup")  # Связь с таблицей Startup
