import csv


def return_games(name):
    data = {
        'scores': []
    }
    with open('scores.csv', 'r') as csv_file:
        csv_reader = csv.reader(csv_file)

        next(csv_reader)

        for line in csv_reader:
            if int(line[1]) > 2017 and (line[4] == name.upper() or line[5] == name.upper()):
                data['scores'].append(line)
    return data


def return_wins(name):
    data = {
        'wins': [],
        'losses': []
    }
    with open('scores.csv', 'r') as csv_file:
        csv_reader = csv.reader(csv_file)

        next(csv_reader)

        for line in csv_reader:
            if int(line[1]) > 2017 and line[4] == name.upper():
                if line[9] > line[10]:
                    data['wins'].append(line)
                else:
                    data['losses'].append(line)
            elif int(line[1]) > 2017 and line[5] == name.upper():
                if line[10] > line[9]:
                    data['wins'].append(line)
                else:
                    data['losses'].append(line)
    return data
