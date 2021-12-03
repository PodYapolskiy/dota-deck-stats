from app import db


class Info(db.Model):
    __tablename__ = 'Info'

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(25), unique=True, nullable=False)
    content = db.Column(db.String(100))

    def __repr__(self) -> str:
        return f'<object Info(id = {self.id}; content = {self.content})>'
