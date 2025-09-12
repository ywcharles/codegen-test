import React, { useState, useRef, useEffect } from 'react'
import './TodoItem.css'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const editInputRef = useRef(null)

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus()
      editInputRef.current.select()
    }
  }, [isEditing])

  const handleEdit = () => {
    setIsEditing(true)
    setEditText(todo.text)
  }

  const handleSave = () => {
    onEdit(editText)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  const handleDoubleClick = () => {
    if (!isEditing) {
      handleEdit()
    }
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        className="toggle-button"
        onClick={onToggle}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed ? '✅' : '⭕'}
      </button>

      {isEditing ? (
        <div className="edit-container">
          <input
            ref={editInputRef}
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
          />
        </div>
      ) : (
        <div 
          className="todo-content"
          onDoubleClick={handleDoubleClick}
          title="Double-click to edit"
        >
          <span className="todo-text">{todo.text}</span>
        </div>
      )}

      <div className="todo-actions">
        {!isEditing && (
          <>
            <button
              className="edit-button"
              onClick={handleEdit}
              aria-label="Edit todo"
            >
              ✏️
            </button>
            <button
              className="delete-button"
              onClick={onDelete}
              aria-label="Delete todo"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TodoItem

