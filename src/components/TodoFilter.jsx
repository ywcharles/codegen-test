import React from 'react'
import './TodoFilter.css'

function TodoFilter({ currentFilter, onFilterChange, stats }) {
  const filters = [
    { key: 'all', label: 'All', count: stats.total },
    { key: 'active', label: 'Active', count: stats.active },
    { key: 'completed', label: 'Completed', count: stats.completed }
  ]

  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={`filter-button ${currentFilter === filter.key ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.key)}
          >
            {filter.label}
            <span className="filter-count">({filter.count})</span>
          </button>
        ))}
      </div>
      
      <div className="stats-summary">
        <span className="stats-text">
          {stats.active} of {stats.total} remaining
        </span>
      </div>
    </div>
  )
}

export default TodoFilter

