import csv


def get_games_history(name, season):
    data = {
        'games': [],
    }
    with open('scores.csv', 'r') as csv_file:
        csv_reader = csv.reader(csv_file)

        next(csv_reader)

        for line in csv_reader:
            if int(line[1]) >= int(season) and (line[4] == name.upper() or line[5] == name.upper()):
                game = {'date': '', 'season': '', 'home_team': '', 'away_team': '', 'home_score': 0, 'away_score': 0, 'result': ''}
                if line[4] == name.upper() and (int(line[9]) > int(line[10])):
                    game['date'] = line[0]
                    game['season'] = line[1]
                    game['home_team'] = line[4]
                    game['away_team'] = line[5]
                    game['home_score'] = line[9]
                    game['away_score'] = line[10]
                    game['result'] = 'Win'
                    data['games'].append(game)
                elif line[5] == name.upper() and (int(line[10]) > int(line[9])):
                    game['date'] = line[0]
                    game['season'] = line[1]
                    game['home_team'] = line[4]
                    game['away_team'] = line[5]
                    game['home_score'] = line[9]
                    game['away_score'] = line[10]
                    game['result'] = 'Win'
                    data['games'].append(game)
                else:
                    game['date'] = line[0]
                    game['season'] = line[1]
                    game['home_team'] = line[4]
                    game['away_team'] = line[5]
                    game['home_score'] = line[9]
                    game['away_score'] = line[10]
                    game['result'] = 'Loss'
                    data['games'].append(game)
    return data


def get_games_season(name, season):
    data = {
        'games': [],
    }
    with open('scores.csv', 'r') as csv_file:
        csv_reader = csv.reader(csv_file)

        next(csv_reader)

        for line in csv_reader:
            if int(line[1]) == int(season) and (line[4] == name.upper() or line[5] == name.upper()):
                game = {'date': '', 'season': '', 'home_team': '', 'away_team': '', 'home_score': 0, 'away_score': 0, 'result': ''}
                if line[4] == name.upper() and (int(line[9]) > int(line[10])):
                    game['date'] = line[0]
                    game['season'] = line[1]
                    game['home_team'] = line[4]
                    game['away_team'] = line[5]
                    game['home_score'] = line[9]
                    game['away_score'] = line[10]
                    game['result'] = 'Win'
                    data['games'].append(game)
                elif line[5] == name.upper() and (int(line[10]) > int(line[9])):
                    game['date'] = line[0]
                    game['season'] = line[1]
                    game['home_team'] = line[4]
                    game['away_team'] = line[5]
                    game['home_score'] = line[9]
                    game['away_score'] = line[10]
                    game['result'] = 'Win'
                    data['games'].append(game)
                else:
                    game['date'] = line[0]
                    game['season'] = line[1]
                    game['home_team'] = line[4]
                    game['away_team'] = line[5]
                    game['home_score'] = line[9]
                    game['away_score'] = line[10]
                    game['result'] = 'Loss'
                    data['games'].append(game)
    return data


def get_teams():
    teams = set()
    team_list = {
        'teams': []
    }
    with open('scores.csv', 'r') as csv_file:
        csv_reader = csv.reader(csv_file)
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

