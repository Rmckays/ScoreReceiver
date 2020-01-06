from flask import Flask, render_template, jsonify, request
from flask_cors import CORS

import csv_util

app = Flask(__name__, static_folder='./client/build/static', template_folder='./client/build')
CORS(app)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/api/history/<string:name>/<string:season>', methods=['GET'])
def send_scores(name, season):
    return jsonify(csv_util.return_team_history(name, season))


@app.route('/api/season/<string:name>/<string:season>', methods=['GET'])
def get_history(name, season):
    return jsonify(csv_util.return_season_history(name, season))


@app.route('/api/teams', methods=['GET'])
def get_teams():
    return jsonify(csv_util.get_teams())


print('Starting Flask!')

app.run(port=4000)
