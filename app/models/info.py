from app import db


class Info(db.Model):
    __tablename__ = 'Info'

    id = db.Column(db.Integer(), primary_key=True)
    min_match_id = db.Column(db.Integer(), default=None)
    max_match_id = db.Column(db.Integer(), default=None)
    reached_2020 = db.Column(db.Boolean(), default=False)

    def __repr__(self) -> str:
        return f'<object Info(id: {self.id}; min: {self.min_match_id}; max: {self.max_match_id}; reached_2020: {self.reached_2020})>'
