"""
Flask-Bootstrap docs - https://pythonhosted.org/Flask-Bootstrap/bootstrap2.html
Bootstrap docs - https://getbootstrap.com/docs/5.1/getting-started/introduction/

Нужно
1. Доступ к сайту и визуализация результата
2. Параллельная с этим загрузка на сервер данных о матчах

Расчитать сколько места займёт хранение всей инфы

! Герои могут быть выбраны как со стороны radiant, так и dire
"""
from flask import Flask
from config import Config
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os
from threading import Thread


app = Flask(__name__)
app.config.from_object(Config)

bootstrap = Bootstrap(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)


from app import routes
from app import errors  #? Возможно должны быть после controllers

# Controllers
from app.controllers import home
from app.controllers.loader import loader  # Loader


# os.remove('app.db')  #? Временно
db.create_all()

# Models
from app.models.match import Match
from app.models.hero import Hero
from app.models.info import Info


def run_app():
    app.run(host='127.0.0.1', port=5000, debug=False)


# Setting up 2 threads: Flask app and public matches loader
flask_thread = Thread(target=run_app)
loader_thread = Thread(target=loader)

flask_thread.start()
loader_thread.start()
