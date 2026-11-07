from flask import Flask, Blueprint, render_template

blueprint = Blueprint('blueprint', __name__, template_folder='templates')

@blueprint.rout('/')
def index():
    return render_template('bul.html')