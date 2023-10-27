const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/pricing");

// Define the pricing plan schema

const pricingPlanSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

// Create the pricing plan model

const PricingPlan = mongoose.model("PricingPlan", pricingPlanSchema);

// Get all pricing plans
app.get("/api/pricing-plans", async (req, res) => {
  const pricingPlans = await PricingPlan.find();
  res.json(pricingPlans);
});

// Start the server
app.listen(3100, () => {
  console.log("Server listening on port 3100");
});