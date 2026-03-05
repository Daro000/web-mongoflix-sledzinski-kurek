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




//[ ] Napisanie zapytania filtrującego filmy po dacie i ocenie (operators: $gt, $and).

db.filmy.find({
    $and: [
        { data_kin: { $gt: "2025-01-01" } },
        { ocena: { $gt: 7 } }
    ]
})


