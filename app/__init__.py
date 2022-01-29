"""
Flask-Bootstrap docs - https://pythonhosted.org/Flask-Bootstrap/bootstrap2.html
Bootstrap docs - https://getbootstrap.com/docs/5.1/getting-started/introduction/

Расчитать сколько места займёт хранение всей инфы
"""
from flask import Flask
from config import Config
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# import os
from threading import Thread


app = Flask(__name__)
app.config.from_object(Config)

bootstrap = Bootstrap(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)


# Errorhandlers and favicon
from app import routes
from app import errors

# Controllers and Loader
from app.controllers import home
from app.controllers.loader import loader


db.create_all()

# Models
from app.models.match import Match
from app.models.hero import Hero
from app.models.info import Info

# If info doesn't exist
if not Info.query.first():
    db.session.add(Info(min_match_id=None, max_match_id=None, reached_2020=False))
    db.session.commit()


def run_app():
    app.run(host='127.0.0.1', port=5000, debug=False)


# Setting up 2 threads: Flask app and public matches loader
flask_thread = Thread(target=run_app)
loader_thread = Thread(target=loader)

flask_thread.start()
loader_thread.start()


if __name__ == "__main__":
    app.run(host='127.0.0.1', debug=True)
