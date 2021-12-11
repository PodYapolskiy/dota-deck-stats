from app import db


class Hero(db.Model):
    __tablename__ = 'Heroes'

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(25), unique=True, nullable=False)
    attribute = db.Column(db.String(3), nullable=False)
    attack_type = db.Column(db.String(6), nullable=False)
    roles = db.Column(db.String(50))

    def __repr__(self) -> str:
        return f'<object Hero(id: {self.id}, name: {self.name})>'
