from sqlalchemy import Column, Integer, ForeignKey
from app.models.rwmodel import RWModel


class UserRole(RWModel):
    user_id = Column(Integer, ForeignKey("user.id"), primary_key=True)
    role_id = Column(Integer, ForeignKey("role.id"), primary_key=True)
