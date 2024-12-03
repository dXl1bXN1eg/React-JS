import React, { useState } from 'react';
import './App.css';

function App() {
  // State'leri tanımlıyoruz
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Görev ekleme fonksiyonu
  const addTask = (e) => {
    e.preventDefault();  // Formun sayfa yenilemesini engeller
    if (taskInput.trim() === '') return;  // Eğer input boşsa işlem yapma
    setTasks([...tasks, { text: taskInput, completed: false }]);
    setTaskInput('');  // Inputu temizle
  };

  // Görevin tamamlanma durumunu değiştiren fonksiyon
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Görevi silme fonksiyonu
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>

      {/* Görev ekleme formu */}
      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Yeni görev ekleyin"
        />
        <button type="submit">Ekle</button>
      </form>

      {/* Görev listesi */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            {task.text}
            <button onClick={() => deleteTask(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
