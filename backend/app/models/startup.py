from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.models.common import DateTimeModelMixin
from app.models.rwmodel import RWModel


class Startup(RWModel, DateTimeModelMixin):
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False, unique=True)
    description = Column(Text)
    owner_id = Column(Integer, ForeignKey("user.id")) 

    owner = relationship("User", back_populates="startups")
    favorite = relationship("Favorite", back_populates="startups")
