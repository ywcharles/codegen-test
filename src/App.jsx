import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import { useTodos } from './hooks/useTodos'

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
    <div className="max-w-2xl mx-auto px-4 py-8 min-h-screen flex flex-col sm:px-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 drop-shadow-sm sm:text-3xl">
          📝 Todo App
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Stay organized and get things done!
        </p>
      </header>

      <main className="flex-1 flex flex-col gap-6">
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
          <div className="text-center py-12 px-4 text-gray-600 dark:text-gray-300 text-lg">
            <p>🎉 No todos yet! Add one above to get started.</p>
          </div>
        )}
      </main>

      <footer className="text-center mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-sm">
        <p>Built with React & ❤️</p>
      </footer>
    </div>
  )
}

export default App
