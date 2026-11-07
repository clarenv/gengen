from flask import Flask, render_template

app = Flask(__name__)

# Ito yung Main Portfolio mo
@app.route('/')
def home():
    return render_template('index.html')

# ITO YUNG KULANG! Kailangan ito para gumana ang /arcade
@app.route('/arcade')
def arcade():
    return render_template('arcade.html')

if __name__ == '__main__':
    app.run(debug=True)
