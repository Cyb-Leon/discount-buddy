const express = require("express");
const cors = require("cors");
const deals = require("./data/deals.json");

/*** */
const app = express();
app.use(cors());
app.use(express.json());

// Pseudo-Copilot Chat logic

app.post("/api/deals", (req, res) => {
  // console.log(req.body.query);
  const query = req.body.query; // e.g., "grocery deals under R200 in Johannesburg"
  const keywords = query.toLowerCase().split(" ");
  const budget = parseInt(keywords.find((word) => word.match(/\d+/)) || 1000);
  console.log(budget);
  const category = keywords.includes("grocery")
    ? "groceries"
    : "school supplies";
  const location = keywords.includes("johannesburg")
    ? "Johannesburg"
    : "Cape Town";

  // Filter deals (mock Copilot processing)

  const results = deals.filter(
    (deal) =>
      deal.category === category &&
      deal.price <= budget &&
      deal.location === location
  );
  console.log(results);
  res.json({ deals: results });
});

// Budget tracking (in-memory for MVP)
let budget = { total: 500, spent: 0 };
app.get("/api/budget", (req, res) => res.json(budget));
app.post("/api/budget", (req, res) => {
  budget = { ...budget, ...req.body };
  res.json(budget);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
