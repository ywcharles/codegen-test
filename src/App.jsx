import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import { useTodos } from './hooks/useTodos'
import './App.css'

function App() {
  const {
    todos,
    filter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setFilter,
    filteredTodos,
    stats
  } = useTodos()

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Todo App</h1>
        <p className="app-subtitle">Stay organized and get things done!</p>
      </header>

      <main className="app-main">
        <TodoForm onAddTodo={addTodo} />
        
        {todos.length > 0 && (
          <>
            <TodoFilter 
              currentFilter={filter}
              onFilterChange={setFilter}
              stats={stats}
            />
            
            <TodoList
              todos={filteredTodos}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
              onEditTodo={editTodo}
            />
          </>
        )}

        {todos.length === 0 && (
          <div className="empty-state">
            <p>🎉 No todos yet! Add one above to get started.</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Built with React & ❤️</p>
      </footer>
    </div>
  )
}

export default App

