import React, { useState } from 'react'

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAddTodo(inputValue)
      setInputValue('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setInputValue('')
    }
  }

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <div className="flex gap-2 items-center sm:flex-col sm:gap-3">
        <input
          type="text"
          className="flex-1 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 sm:w-full"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <button 
          type="submit" 
          className="px-6 py-3 bg-primary text-white border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none sm:w-full"
          disabled={!inputValue.trim()}
        >
          ➕ Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm
