import csv
import urllib.request
import io


def get_games_history(name, season):
    data = {
        'games': [],
    }
    url = 'https://raw.githubusercontent.com/fivethirtyeight/nfl-elo-game/master/data/nfl_games.csv'
    csv_file = urllib.request.urlopen(url)
    csv_reader = csv.reader(io.TextIOWrapper(csv_file))

    next(csv_reader)

    for line in csv_reader:
        row ={
            'date': line[0],
            'season_year_int': int(line[1]),
            'home_team': line[4],
            'away_team': line[5],
            'home_score': int(line[9]),
            'away_score': int(line[10])
        }

        if row['season_year_int'] >= int(season) and (row['home_team'] == name.upper() or row['away_team'] == name.upper()):
            game = {'date': '', 'season': '', 'home_team': '', 'away_team': '', 'home_score': 0, 'away_score': 0, 'result': ''}
            if row['home_team'] == name.upper() and (row['home_score'] > row['away_score']):
                game['date'] = row['date']
                game['season'] = row['season_year_int']
                game['home_team'] = row['home_team']
                game['away_team'] = row['away_team']
                game['home_score'] = row['home_score']
                game['away_score'] = row['away_score']
                game['result'] = 'Win'
                data['games'].append(game)
            elif row['away_team'] == name.upper() and (row['away_score'] > row['home_score']):
                game['date'] = row['date']
                game['season'] = row['season_year_int']
                game['home_team'] = row['home_team']
                game['away_team'] = row['away_team']
                game['home_score'] = row['home_score']
                game['away_score'] = row['away_score']
                game['result'] = 'Win'
                data['games'].append(game)
            else:
                game['date'] = row['date']
                game['season'] = row['season_year_int']
                game['home_team'] = row['home_team']
                game['away_team'] = row['away_team']
                game['home_score'] = row['home_score']
                game['away_score'] = row['away_score']
                game['result'] = 'Loss'
                data['games'].append(game)
    return data


def get_games_season(name, season):
    data = {
        'games': [],
    }
    url = 'https://raw.githubusercontent.com/fivethirtyeight/nfl-elo-game/master/data/nfl_games.csv'
    csv_file = urllib.request.urlopen(url)
    csv_reader = csv.reader(io.TextIOWrapper(csv_file))

    next(csv_reader)

    for line in csv_reader:
        row = {
            'date': line[0],
            'season_year_int': int(line[1]),
            'home_team': line[4],
            'away_team': line[5],
            'home_score': int(line[9]),
            'away_score': int(line[10])
        }

        if row['season_year_int'] == int(season) and (row['home_team'] == name.upper() or row['away_team'] == name.upper()):
            game = {'date': '', 'season': '', 'home_team': '', 'away_team': '', 'home_score': 0, 'away_score': 0, 'result': ''}
            if row['home_team'] == name.upper() and (row['home_score'] > row['away_score']):
                game['date'] = row['date']
                game['season'] = row['season_year_int']
                game['home_team'] = row['home_team']
                game['away_team'] = row['away_team']
                game['home_score'] = row['home_score']
                game['away_score'] = row['away_score']
                game['result'] = 'Win'
                data['games'].append(game)
            elif row['away_team'] == name.upper() and (row['away_score'] > row['home_score']):
                game['date'] = row['date']
                game['season'] = row['season_year_int']
                game['home_team'] = row['home_team']
                game['away_team'] = row['away_team']
                game['home_score'] = row['home_score']
                game['away_score'] = row['away_score']
                game['result'] = 'Win'
                data['games'].append(game)
            else:
                game['date'] = row['date']
                game['season'] = row['season_year_int']
                game['home_team'] = row['home_team']
                game['away_team'] = row['away_team']
                game['home_score'] = row['home_score']
                game['away_score'] = row['away_score']
                game['result'] = 'Loss'
                data['games'].append(game)
    return data


def get_teams():
    teams = set()
    team_list = {
        'teams': []
    }
    url = 'https://raw.githubusercontent.com/fivethirtyeight/nfl-elo-game/master/data/nfl_games.csv'
    csv_file = urllib.request.urlopen(url)
    csv_reader = csv.reader(io.TextIOWrapper(csv_file))
    next(csv_reader)
    for line in csv_reader:
        if int(line[1]) > 1980:
            teams.add(line[4])
            teams.add(line[5])
    team_list['teams'] = list(teams)
    return team_list


def return_team_history(name, season):
    data = get_games_history(name, season)
    return data


def return_season_history(name, season):
    season_history = get_games_season(name, season)
    return season_history

#

