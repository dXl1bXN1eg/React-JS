const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Express uygulaması
const app = express();
const port = 5000;  // Sunucu portu

// CORS ve JSON veri işleme
app.use(cors());
app.use(bodyParser.json());

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch(err => console.log('MongoDB bağlantısı başarısız', err));

// MongoDB şeması ve modeli
const taskSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

// Veritabanına görev eklemek için API endpoint
app.post('/tasks', async (req, res) => {
  const { text, completed } = req.body;
  const newTask = new Task({ text, completed });

  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: 'Görev kaydedilemedi' });
  }
});

// Tüm görevleri almak için API endpoint
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ message: 'Görevler alınamadı' });
  }
});

// Sunucu başlatma
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor`);
});
