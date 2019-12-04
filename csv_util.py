import csv


def return_data(name):
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
