const express = require('express');

const router = express.Router();

const Menu = require("../models/Menu");





// menu Item post method

router.post("/", async (req, res) => {
    try {
      const data = req.body; // Assuming the request body containing the person data
  
      //Create a new Person document using the Mongoose model
      const menuItem = new Menu(data);
  
      //Save the Person data;
  
      const menuItems = await menuItem.save();
      console.log("data saved");
      res.status(200).json(menuItems);
    } catch (error) {
      console.log(error);
      res.status(500).json(error, "Internal Server Error");
    }
  });
  
  // menu Item get method
  router.get("/", async (req, res) => {
    try {
      const data = await Menu.find();
  
      console.log("Data fetched");
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json(error, "Internal Server Error");
    }
  });
  
  module.exports= router