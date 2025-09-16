import React, { useState, useRef, useEffect } from 'react'

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
    <div className={`flex items-center gap-3 p-4 bg-background-primary dark:bg-dark-background-primary border border-border-default dark:border-dark-border-default rounded-lg transition-all duration-200 min-h-[60px] hover:border-primary hover:shadow-md hover:shadow-black/10 dark:hover:shadow-white/10 ${todo.completed ? 'opacity-70 bg-background-secondary dark:bg-dark-background-elevated' : ''} sm:p-3 sm:gap-2`}>
      <button
        className="bg-none border-none text-xl cursor-pointer p-1 rounded flex-shrink-0 transition-transform duration-200 hover:scale-110"
        onClick={onToggle}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed ? '✅' : '⭕'}
      </button>

      {isEditing ? (
        <div className="flex-1">
          <input
            ref={editInputRef}
            type="text"
            className="w-full px-2 py-2 border-2 border-primary rounded text-base bg-background-primary dark:bg-dark-background-secondary text-text-primary dark:text-dark-text-primary outline-none"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
          />
        </div>
      ) : (
        <div 
          className="flex-1 text-left cursor-pointer py-1 px-0 rounded transition-colors duration-200 hover:bg-primary/5"
          onDoubleClick={handleDoubleClick}
          title="Double-click to edit"
        >
          <span className={`text-base leading-relaxed break-words ${todo.completed ? 'line-through text-text-muted dark:text-dark-text-muted' : 'text-text-primary dark:text-dark-text-primary'}`}>
            {todo.text}
          </span>
        </div>
      )}

      <div className="flex gap-2 flex-shrink-0 sm:gap-1">
        {!isEditing && (
          <>
            <button
              className="bg-none border-none text-base cursor-pointer p-2 rounded transition-all duration-200 opacity-60 hover:opacity-100 hover:bg-primary/10 hover:scale-110 sm:p-1.5 sm:text-sm"
              onClick={handleEdit}
              aria-label="Edit todo"
            >
              ✏️
            </button>
            <button
              className="bg-none border-none text-base cursor-pointer p-2 rounded transition-all duration-200 opacity-60 hover:opacity-100 hover:bg-red-100 dark:hover:bg-red-900/20 hover:scale-110 sm:p-1.5 sm:text-sm"
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
