from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, Enum
from sqlalchemy.orm import relationship
from app.models.common import DateTimeModelMixin
from app.models.rwmodel import RWModel
from app.models.role import RoleEnum


class User(RWModel, DateTimeModelMixin):
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    roles = Column(Enum(RoleEnum), nullable=False)  # enum для роли
    favorite_id = Column(Integer, ForeignKey("favorite.id"))
    
    startups = relationship("Startup", back_populates="owner")