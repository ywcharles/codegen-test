import React, { useState } from 'react'
import './TodoForm.css'

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
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <button 
          type="submit" 
          className="add-button"
          disabled={!inputValue.trim()}
        >
          ➕ Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm

