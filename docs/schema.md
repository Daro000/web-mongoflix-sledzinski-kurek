| Pole              | Typ        | Opis                                                     | Przykład                                              |
| :---------------- | :--------- | :------------------------------------------------------- | :---------------------------------------------------- |
| tytul             | **String** | Pełny tytuł filmu.                                       | "Kosmiczna Komedia"                                   |
| data_kin          | **Date**   | Data premiery kinowej.                                   | ISODate("2025-06-12")                                 |
| gatunki           | **Array**  | Lista gatunków filmu.                                    | ["komedia", "horror"]                                 |
| rezyser           | **String** | Nazwisko reżysera.                                       | "Jan Kowalski"                                        |
| aktorzy           | **Array**  | Lista aktorów występujących w filmie.                    | ["Anna Nowak", "Piotr Zieliński", "Marta Wiśniewska"] |
| typ_dostepu       | **String** | Czy film jest płatny ("Premium") czy darmowy ("Public"). | "Premium"                                             |
| licznik_odtworzen | **Int**    | Liczba odtworzeń filmu.                                  | 1420                                                  |


| Pole                 | Typ         | Opis                                          | Przykład                                      |
| :------------------- | :---------- | :-------------------------------------------- | :-------------------------------------------- |
| login                | **String**  | Unikalny identyfikator użytkownika.           | "kinoFan99"                                   |
| email                | **String**  | Adres mailowy.                                | "[fan@mongoflix.pl](mailto:fan@mongoflix.pl)" |
| punkty_lojalnosciowe | **Int**     | Punkty zdobyte za aktywność.                  | 350                                           |
| czy_vip              | **Boolean** | Status VIP użytkownika.                       | true                                          |
| preferencje          | **Object**  | Zagnieżdżone ustawienia np. ulubione gatunki. | { "ulubione_gatunki": ["komedia", "akcja"] }  |


| Pole          | Typ          | Opis                           | Przykład                   |
| :------------ | :----------- | :----------------------------- | :------------------------- |
| film_id       | **ObjectId** | Referencja do filmy._id.       | ObjectId("64f1a2...")      |
| uzytkownik_id | **ObjectId** | Referencja do uzytkownicy._id. | ObjectId("507f1f...")      |
| ocena         | **Int**      | Ocena od 1 do 10.              | 8                          |
| komentarz     | **String**   | Krótka recenzja użytkownika.   | "Super efektowna komedia!" |
| data_recenzji | **Date**     | Data dodania recenzji.         | ISODate("2026-02-18")      |
