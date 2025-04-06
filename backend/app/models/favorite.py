from sqlalchemy import Column, Integer, ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship
from app.models.rwmodel import RWModel


class Favorite(RWModel):
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id", ondelete="CASCADE"), nullable=False)
    startup_id = Column(Integer, ForeignKey("startup.id", ondelete="CASCADE"), nullable=False)

    # Защита от дублирования
    __table_args__ = (
        UniqueConstraint('user_id', 'startup_id', name='unique_favorite'),
    )
    user = relationship("User", back_populates="favorites")
    startup = relationship("Startup", back_populates="favorites")
