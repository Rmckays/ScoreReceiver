import csv

with open('scores.csv', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)