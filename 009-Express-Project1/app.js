const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const uuid = require("uuid");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); //Burası npm ile yüklediğimiz ejs paketin adı. Dosya adlarını da ejs e çeviriyoruz

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  //   const htmlFilePath = path.join(__dirname, "views", "index.html");

  //   res.sendFile(htmlFilePath);
  // Artık yukardakilerin yerine render kullanacağız.!!!

  res.render("index");
});

app.get("/restaurants", function (req, res) {
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id; //param özelliği ile alıyoruz
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
      //Dinamik Route. Return eklememizin sebebi eğer eşitse burda durduruyoruz. Dışarıya veri aktarmak için değil burası. 
    }
  }

  res.status(404).render('404'); //Returnden boş dönerse 404 sayfasına direkt gidecek. Else ile yapmadık yukarda çünkü orda tüm koşulları sağlamıyorudu.


});

app.get("/recommend", function (req, res) {
  res.render("recommend");
});

app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4(); //Burada id diye değer oluşturuyor js bizim yerimize. uuid.v4() ile benzersiz id oluşturuyoruz.
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect("/confirm");
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.get("/about", function (req, res) {
  res.render("about");
});

//404(bulunamayan sayfa) Sayfasını tüm isteklerden sonra başlatıyoruz çünkü yukardan aşağı doğru işliyor
app.use(function(req, res) {
  res.status(404).render('404');
})

//500(Server hatası) sayfası için 4 parametre alacak. Burası örneğin yazma okuma dosyalarında çok fazla işlem olduğunda server tarafında bir hata meydana geldiği zaman okunacaktır.
app.use(function(error, req, res, next){
  res.status(500).render('500');
})

app.listen(3000);
