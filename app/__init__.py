from flask import Flask
from config import Config
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app = Flask(__name__) 
app.config.from_object(Config)

bootstrap = Bootstrap(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)


from app import routes
from app import errors  # Возможно должны быть после controllers

# Controllers


# Models



if __name__=='__main__':
	app.run(host='127.0.0.1', port=5000)
