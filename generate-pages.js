const fs = require("fs");
const path = require("path");

const cities = ["chicago", "miami", "austin", "new-york", "st-louis"];
const foods = ["pizza", "burger", "tacos", "sushi", "chicken"];

function template(city, food) {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Best ${food} in ${city} | Top Restaurants</title>
  <meta name="description" content="Find the best ${food} in ${city} ranked by reviews and AI." />
  <link rel="stylesheet" href="/style.css">
</head>
<body>

<h1>Best ${food} in ${city}</h1>

<div id="modeBar"></div>
<div id="statusBar"></div>

<input id="food" value="${food}">
<input id="location" value="${city}">
<button onclick="findFood()">Search</button>

<div id="results"></div>

<script src="/app.js"></script>

</body>
</html>`;
}

function createPages() {
  cities.forEach(city => {
    foods.forEach(food => {
      const dir = path.join(__dirname, city, food);

      fs.mkdirSync(dir, { recursive: true });

      fs.writeFileSync(
        path.join(dir, "index.html"),
        template(city, food)
      );

      console.log(`Created: /${city}/${food}`);
    });
  });
}

createPages();
