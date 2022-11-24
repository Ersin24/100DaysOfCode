const express = require("express");
const uuid = require("uuid");

const resData = require("../util/restaurant-data");

const router = express.Router();

router.get("/restaurants", function (req, res) {
  let order = req.query.order;
  let nextOrder = 'desc';

  if (order !== "asc" && order !== "desc") {
    order = "asc";
  }

  if (order === 'desc') {
    nextOrder = 'asc';
  }

  const storedRestaurants = resData.getStoredRestaurants();

  storedRestaurants.sort(function (resA, resB) {
    if (
      (order === "asc" && resA.name > resB.name) ||
      (order === "desc" && resB.name > resA.name)
    ) {
      return 1;
    }
    return -1;
  });

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder,
  });
});

router.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id; //param özelliği ile alıyoruz
  const storedRestaurants = resData.getStoredRestaurants();

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
      //Dinamik Route. Return eklememizin sebebi eğer eşitse burda durduruyoruz. Dışarıya veri aktarmak için değil burası.
    }
  }

  res.status(404).render("404"); //Returnden boş dönerse 404 sayfasına direkt gidecek. Else ile yapmadık yukarda çünkü orda tüm koşulları sağlamıyorudu.
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4(); //Burada id diye değer oluşturuyor js bizim yerimize. uuid.v4() ile benzersiz id oluşturuyoruz.

  const restaurants = resData.getStoredRestaurants();

  restaurants.push(restaurant);

  resData.storedRestaurants(restaurants);

  res.redirect("/confirm");
});

router.get("/confirm", function (req, res) {
  res.render("confirm");
});

module.exports = router;
