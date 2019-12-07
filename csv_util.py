import csv


def get_games_history(name, season):
    data = {
        'wins': [],
        'losses': []
    }
    with open('scores.csv', 'r') as csv_file:
        csv_reader = csv.reader(csv_file)

        next(csv_reader)

        for line in csv_reader:
            if int(line[1]) > int(season) and (line[4] == name.upper() or line[5] == name.upper()):
                if line[4] == name.upper() and line[9] > line[10]:
                    data['wins'].append(line)
                elif line[5] == name.upper() and line[10] > line[9]:
                    data['wins'].append(line)
                else:
                    data['losses'].append(line)
    return data


def get_games_season(name, season):
    data = {
        'wins': [],
        'losses': []
    }
    with open('scores.csv', 'r') as csv_file:
        csv_reader = csv.reader(csv_file)

        next(csv_reader)

        for line in csv_reader:
            if int(line[1]) == int(season) and (line[4] == name.upper() or line[5] == name.upper()):
                if line[4] == name.upper() and line[9] > line[10]:
                    data['wins'].append(line)
                elif line[5] == name.upper() and line[10] > line[9]:
                    data['wins'].append(line)
                else:
                    data['losses'].append(line)
    return data


def get_teams():
    teams = set()
    with open('scores.csv', 'r') as csv_file:
        csv_reader = csv.reader(csv_file)
        next(csv_reader)
        for line in csv_reader:
            teams.add(line[4])
            teams.add(line[4])
    return teams


def return_team_history(name, season):
    data = get_games_history(name, season)
    return data


def return_wins_history(name, season):
    data = get_games_history(name, season)
    return data['wins']


def return_season_history(name, season):
    season_history = get_games_season(name, season)
    return season_history


def return_season_wins(name, season):
    season_history = get_games_season(name, season)
    return season_history['wins']