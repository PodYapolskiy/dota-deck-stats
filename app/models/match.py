from app import db


class Match(db.Model):
    __tablename__ = 'PublicMatches'

    id = db.Column(db.Integer(), primary_key=True)
    radiant_win = db.Column(db.Boolean())
    start_time = db.Column(db.Integer(), nullable=False)  # Save as Unix time
    avg_mmr = db.Column(db.Integer(), nullable=False)
    radiant_team = db.Column(db.String(19), nullable=False)  # Max length of string is 19
    dire_team = db.Column(db.String(19), nullable=False)  # Example: "17 87 25 64 7"

    def __repr__(self) -> str:
        return f'<object Match(id: {self.id})>'
