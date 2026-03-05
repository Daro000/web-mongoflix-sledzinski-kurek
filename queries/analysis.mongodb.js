db = db.getSiblingDB('mongoflix');

print("\n--- AKTUALIZACJA DANYCH FILMÓW ---");

print("\n1. Oznaczanie popularnych filmów jako FEATURED:");
const wynik = db.filmy.updateMany(
    { licznik_odtworzen: { $gt: 2500 } },
    { $set: { featured: true } }
);
print("Zaktualizowano filmów: " + wynik.modifiedCount);

print("\n2. Oznaczanie pozostałych filmów:");
const wynik2 = db.filmy.updateMany(
    { licznik_odtworzen: { $lte: 2500 } },
    { $set: { featured: false } }
);
print("Zaktualizowano filmów: " + wynik2.modifiedCount);

print("\n3. Lista filmów FEATURED:");
const featuredFilmy = db.filmy.find(
    { featured: true },
    { tytul: 1, licznik_odtworzen: 1, featured: 1, _id: 0 }
).toArray();
printjson(featuredFilmy);

print("\n4. Filmy z gatunku 'komedia':");
const komedie = db.filmy.find(
    { gatunki: "komedia" },
    { tytul: 1, gatunki: 1, _id: 0 }
).toArray();
printjson(komedie);

print("\n5. Filmy po dacie i ocenie:");
const filmyPoDacieIOcenie = db.filmy.find(
    {
        $and: [
            { data_kin: { $gt: "2025-01-01" } },
            { ocena: { $gt: 7 } }
        ]
    },
    { tytul: 1, data_kin: 1, ocena: 1, _id: 0 }
).toArray();
printjson(filmyPoDacieIOcenie);

print("\n6. Średnia ocena dla każdego gatunku:");
const sredniaOcenaGatunku = db.filmy.aggregate([
    { $unwind: "$gatunki" },
    { $group: { _id: "$gatunki", sredniaOcena: { $avg: "$ocena" } } }
]).toArray();
printjson(sredniaOcenaGatunku);