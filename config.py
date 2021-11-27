import os


class Config(object):
	SECRET_KEY = os.environ.get('SECRET_KEY') or 'dmi1_!#e1-d2&al,sdop1k'

	SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://postgres:Et0_Porol-Postgresql@127.0.0.1:5432/basic_flask_project'
	SQLALCHEMY_TRACK_MODIFICATIONS = False

	APP_NAME = os.environ.get('APP_NAME') or 'Dota Deck assistent'