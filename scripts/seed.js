const path = require('path');
const dataPath = path.join(__dirname, '../data/filmy.json');
const data = require(dataPath);


db = db.getSiblingDB('mongoflix');

db.filmy.drop();
db.uzytkownicy.drop();
db.recenzje.drop();

print("--- Start importu danych do MongoFlix ---");


db.filmy.insertMany(data.filmy);
db.uzytkownicy.insertMany(data.uzytkownicy);
db.recenzje.insertMany(data.recenzje);

print("--- Sukces: Dane zostały zaimportowane do MongoFlix ---");