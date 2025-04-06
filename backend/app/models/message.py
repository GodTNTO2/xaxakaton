from sqlalchemy import Column, Integer, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.models.rwmodel import RWModel
from app.models.common import DateTimeModelMixin


class Message(RWModel, DateTimeModelMixin):
    id = Column(Integer, primary_key=True)
    chat_id = Column(Integer, ForeignKey("chat.id"))
    sender_id = Column(Integer, ForeignKey("user.id"))
    content = Column(Text, nullable=False)

    startup = relationship("Startup", back_populates="messages")
    chat = relationship("Chat", back_populates="messages")