from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.models.rwmodel import RWModel
from app.models.common import DateTimeModelMixin


class Chat(RWModel, DateTimeModelMixin):
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    project_id = Column(Integer, ForeignKey("project.id"), nullable=True)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)

    project = relationship("Project", back_populates="chats")
    user = relationship("User", back_populates="chats")