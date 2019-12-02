from flask import Flask, render_template

app = Flask(__name__, static_folder='./client/build/static', template_folder='./client/build')

@app.route('/')
def home():
    return render_template('index.html')


print('Starting Flask!')

app.run(port=4000)
