import {useState} from 'react';

export default () => {
  const TODO_KEY = "TODO"
  const DONE_KEY = "DONE"

  const initTodos = () => {
    const retrievedTodos = localStorage.getItem(TODO_KEY)
    if (retrievedTodos == null) {
      return []
    } else {
      return JSON.parse(retrievedTodos)
    }
  }

  const initDones = () => {
    let retrievedDones = localStorage.getItem(DONE_KEY)
    if (retrievedDones == null) {
      return []
    } else {
      return JSON.parse(retrievedDones)
    }
  }

  const [todos, setTodos] = useState(initTodos());
  const [dones, setDones] = useState(initDones());

  console.log(initDones())

  return {
    todos,
    dones,
    addTodo: todoText => {
      const newTodos = [...todos, todoText]
      setTodos(newTodos);
      localStorage.setItem(TODO_KEY, JSON.stringify(newTodos))
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
      localStorage.setItem(TODO_KEY, JSON.stringify(newTodos))
    },
    setToDone: todoIndex => {
      const item = todos[todoIndex]
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      const newDones = [...dones, item]
      setTodos(newTodos);
      setDones(newDones);
      localStorage.setItem(TODO_KEY, JSON.stringify(newTodos))
      localStorage.setItem(DONE_KEY, JSON.stringify(newDones));
    },
    setToTodo: doneIndex => {
      const item = dones[doneIndex]
      const newDones = dones.filter((_, index) => index !== doneIndex);
      const newTodos = [...todos, item]
      setDones(newDones);
      setTodos(newTodos);
      localStorage.setItem(TODO_KEY, JSON.stringify(newTodos))
      localStorage.setItem(DONE_KEY, JSON.stringify(newDones));
    },
    deleteDone: doneIndex => {
      const newDones = dones.filter((_, index) => index !== doneIndex);
      setDones(newDones);
      localStorage.setItem(DONE_KEY, JSON.stringify(newDones))
    }
  };
};
