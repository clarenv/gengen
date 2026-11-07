import os
from flask import Flask, render_template

# --- ITO ANG FIX ---
# Kinukuha natin yung exact folder kung nasaan ang app.py
base_dir = os.path.abspath(os.path.dirname(__file__))

# Sinasabi natin kay Flask kung saan exact nakalagay ang templates at static
app = Flask(__name__, 
            template_folder=os.path.join(base_dir, 'templates'),
            static_folder=os.path.join(base_dir, 'static'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/arcade')
def arcade():
    return render_template('arcade.html')

if __name__ == '__main__':
    app.run(debug=True)
