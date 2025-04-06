from sqlalchemy import Column, Integer, Text, ForeignKey
from sqlalchemy.orm import relationship
from app.models.rwmodel import RWModel
from app.models.common import DateTimeModelMixin


class InvestmentRequest(RWModel, DateTimeModelMixin):
    id = Column(Integer, primary_key=True)
    startup_id = Column(Integer, ForeignKey("startup.id"), nullable=False)
    description = Column(Text, nullable=True)

    startup = relationship("Startup")
