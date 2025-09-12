import { useState, useEffect, useMemo } from 'react'
import { loadTodos, saveTodos } from '../utils/storage'
import { generateId } from '../utils/todoUtils'

export function useTodos() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = loadTodos()
    setTodos(savedTodos)
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  // Add a new todo
  const addTodo = (text) => {
    if (!text.trim()) return

    const newTodo = {
      id: generateId(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }

    setTodos(prevTodos => [newTodo, ...prevTodos])
  }

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  // Edit a todo's text
  const editTodo = (id, newText) => {
    if (!newText.trim()) {
      deleteTodo(id)
      return
    }

    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, text: newText.trim() }
          : todo
      )
    )
  }

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }

  // Toggle all todos completion status
  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed)
    setTodos(prevTodos =>
      prevTodos.map(todo => ({
        ...todo,
        completed: !allCompleted
      }))
    )
  }

  // Filtered todos based on current filter
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }, [todos, filter])

  // Statistics
  const stats = useMemo(() => {
    const total = todos.length
    const completed = todos.filter(todo => todo.completed).length
    const active = total - completed

    return {
      total,
      completed,
      active
    }
  }, [todos])

  return {
    todos,
    filter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    toggleAll,
    setFilter,
    filteredTodos,
    stats
  }
}

