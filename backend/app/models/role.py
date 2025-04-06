from sqlalchemy import Column, Integer, Enum
import enum
from app.models.rwmodel import RWModel


class RoleEnum(str, enum.Enum):
    user = "user"
    investor = "investor"
    startup_owner = "startup_owner"
    equipment_provider = "equipment_provider"
    admin = "admin"


class Role(RWModel):
    id = Column(Integer, primary_key=True)
    name = Column(Enum(RoleEnum), unique=True, nullable=False)