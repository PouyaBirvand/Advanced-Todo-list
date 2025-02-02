import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');
  const [priority, setPriority] = useState('medium');

  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
        createdAt: new Date().toISOString(),
        priority: priority,
      },
    ]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Add other task-related functions here

  return {
    tasks,
    setTasks,
    newTask,
    setNewTask,
    editingTask,
    setEditingTask,
    editText,
    setEditText,
    priority,
    setPriority,
    addTask,
    deleteTask,
  };
};
