> Öncelikle `show dbs` ile çalışan db görüntülüyoruz. Sonrasında `use blog` ile veritabanı oluşturuyoruz.

> `db.authors.insertOne({ name: "Maximilian Sch", email: "max@test.com" } )` gibi yazar verileri ekliyoruz.  `db.authors.find()` ile veriler olmuş mu diye bakıyoruz. 