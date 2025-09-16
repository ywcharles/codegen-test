import React from 'react'

function TodoFilter({ currentFilter, onFilterChange, stats }) {
  const filters = [
    { key: 'all', label: 'All', count: stats.total },
    { key: 'active', label: 'Active', count: stats.active },
    { key: 'completed', label: 'Completed', count: stats.completed }
  ]

  return (
    <div className="flex flex-col gap-4 p-4 bg-background-primary dark:bg-dark-background-primary border border-border-default dark:border-dark-border-default rounded-lg mb-4 sm:p-3">
      <div className="flex gap-2 justify-center flex-wrap sm:gap-1.5">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={`px-4 py-2 border border-border-default dark:border-dark-border-strong rounded-md cursor-pointer transition-all duration-200 text-sm flex items-center gap-1 sm:px-3 sm:py-1.5 sm:text-xs ${
              currentFilter === filter.key 
                ? 'bg-primary text-white border-primary' 
                : 'bg-background-primary dark:bg-dark-background-secondary text-text-secondary dark:text-dark-text-secondary hover:border-primary hover:text-primary'
            }`}
            onClick={() => onFilterChange(filter.key)}
          >
            {filter.label}
            <span className="text-xs opacity-80">({filter.count})</span>
          </button>
        ))}
      </div>
      
      <div className="text-center pt-2 border-t border-border-subtle dark:border-dark-border-default">
        <span className="text-text-secondary dark:text-dark-text-muted text-sm">
          {stats.active} of {stats.total} remaining
        </span>
      </div>
    </div>
  )
}

export default TodoFilter
