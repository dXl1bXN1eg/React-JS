import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Sayfa yüklendiğinde görevleri al
  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Görevler alınamadı:', error));
  }, []);

  // Görev ekleme
  const addTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === '') return;

    const newTask = { text: taskInput, completed: false };

    // Yeni görevi API'ye gönder
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(response => response.json())
      .then(data => setTasks([...tasks, data]))
      .catch(error => console.error('Görev eklenemedi:', error));

    setTaskInput('');
  };

  // Görev tamamlanma durumunu değiştirme
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Yeni görev ekleyin"
        />
        <button type="submit">Ekle</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
