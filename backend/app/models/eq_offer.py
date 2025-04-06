from sqlalchemy import Column, Integer, Text, String, ForeignKey
from sqlalchemy.orm import relationship
from app.models.rwmodel import RWModel
from app.models.common import DateTimeModelMixin


class EquipmentOffer(RWModel, DateTimeModelMixin):
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    provider_id = Column(Integer, ForeignKey("user.id"))

    user = relationship("User", back_populates="equipmentoffers")