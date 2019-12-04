from flask import Flask, render_template, jsonify, request

import csv_util

app = Flask(__name__, static_folder='./client/build/static', template_folder='./client/build')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/api/scores/<string:name>', methods=['GET'])
def send_scores(name):
    return jsonify(csv_util.return_games(name))


@app.route('/api/wins/<string:name>', methods=['GET'])
def get_wins(name):
    return jsonify(csv_util.return_wins(name))


print('Starting Flask!')

app.run(port=4000)
