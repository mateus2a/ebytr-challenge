const Task = require('../models/Task');

module.exports = {
  async index(req, res) {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  },
  async store(req, res) {
    const task = req.body;

    const newTask = new Task(task);

    try {
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(409).json({ message: error.message});
    }
  },
  async read(req, res) {
    try {
      const task = await Task.findById(req.params.id);
      req.status(200).json(task);
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  },
  async update(req, res) {
    let task = await Task.findById(req.params.id);
    task = req.body;

    const updateTask = new Task(task);

    try {
      await Task.updateOne({_id: req.params.id}, updateTask);
      res.status(201).json(updateTask);
    } catch (error) {
      res.status(409).json({ message: error.message});
    }
  },
  async delete(req, res) {
    try{
      await Task.deleteOne({_id: req.params.id});
      res.status(201).json("Task deleted Successfully");
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
  },
};