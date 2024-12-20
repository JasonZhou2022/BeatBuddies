from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)

#create the app based off the module name
app = Flask(__name__)

# assign the url of the database to connect python with the actual database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"

# initialize the app with the extension
db.init_app(app)

#defintion of the actual tables using the ORM model
#note that defining these classes does not actually bring them into existence/instantiate them
class User(db.Model):
    
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(unique=True)
    email: Mapped[str]
    
#instantiating actual tables here
#db (from SQLAlchemy) automatically takes all defined class-defined tables and creates them
#any tables made in submodules need to be imported back into this file for them to be created
with app.app_context():
    db.create_all()