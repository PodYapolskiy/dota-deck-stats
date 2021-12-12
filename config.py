import os


class Config(object):
	SECRET_KEY = os.environ.get('SECRET_KEY') or '123456789'
 
	basedir = os.path.abspath(os.path.dirname(__file__))
	SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'app.db')
	SQLALCHEMY_TRACK_MODIFICATIONS = False

	APP_NAME = os.environ.get('APP_NAME') or 'Dota Deck Assistent'