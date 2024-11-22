const Task = require('../models/task.model');  

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    try {
        const task = await Task.create({ title, description });
        return res.status(201).json({ task });
    } catch (err) {
        return res.status(500).json({ message: 'Error creating task' });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json({ allTasks: tasks });
    } catch (err) {
        return res.status(500).json({ message: 'Error fetching tasks' });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        return res.status(200).json({ message: 'Task updated', task: updatedTask });
    } catch (err) {
        return res.status(500).json({ message: 'Error updating task' });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Error deleting task' });
    }
};
