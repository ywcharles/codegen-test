import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-text-secondary dark:text-dark-text-muted italic">
        <p>No todos match your current filter.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggleTodo(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)}
          onEdit={(newText) => onEditTodo(todo.id, newText)}
        />
      ))}
    </div>
  )
}

export default TodoList
