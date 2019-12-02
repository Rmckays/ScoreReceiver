import csv

with open('scores.csv', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)

    next(csv_reader)

    for line in csv_reader:
        if int(line[1]) > 2017 and (line[4] == "KC" or line[5] == "KC"):
            print(line)
