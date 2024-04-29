const express = require('express');

const router = express.Router();

const Person = require("../models/Person");

router.post("/", async (req, res) => {
    try {
      const data = req.body; // Assuming the request body containing the person data
  
      //Create a new Person document using the Mongoose model
      const newPerson = new Person(data);
  
      //Save the Person data;
  
      const savedPerson = await newPerson.save();
      console.log("data saved");
      res.status(200).json(savedPerson);
    } catch (error) {
      console.log(error);
      res.status(500).json(error, "Internal Server Error");
    }
  });


  router.get("/", async (req, res) => {
    try {
      const data = await Person.find();
  
      console.log("Data fetched");
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json(error, "Internal Server Error");
    }
  });


  // fecthed the data acording to params

router.get("/:work", async (req, res) => {
    try {
      const workType = req.params.work;
      if (
        workType === "chef" ||
        workType === "manager" ||
        workType === "waiter"
      ) {
        const data = await Person.find({ work: workType });
  
        console.log("Data fetched");
        res.status(200).json(data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error, "Internal Server Error");
    }
  });


  // update method is using


  router.put("/:id", async(req,res) => {
    try {

      const personId = req.params.id;  // Extract the id from the URL parameter
      const updatedPersonData = req.body;  //Updated data for the person


      const response = await Person.findByIdAndUpdate(personId, updatedPersonData , {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose Validation

      });


      if (!response) {
        return res.status(404).json({error: 'Person not found'})
      }

      console.log("data updated");
      res.status(200).json({message: "Person Deleted Successfully"});


    } catch (error) {
      console.log(error);
      res.status(500).json(error, "Internal Server Error");
    
    }
  })



router.delete('/:id', async(req,res) => {

  try {
    const personId = req.params.id;

    const deletePerson = await Person.findByIdAndDelete(personId);
    
    if (!deletePerson) {
      return res.status(404).json({error: 'Person not found'})
    }

    console.log("data updated");
      res.status(200).json(deletePerson);


  } catch (error) {
    console.log(error);
      res.status(500).json(error, "Internal Server Error");
    
    
  }
})

  module.exports = router;