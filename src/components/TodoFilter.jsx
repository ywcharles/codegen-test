import React from 'react'

function TodoFilter({ currentFilter, onFilterChange, stats }) {
  const filters = [
    { key: 'all', label: 'All', count: stats.total },
    { key: 'active', label: 'Active', count: stats.active },
    { key: 'completed', label: 'Completed', count: stats.completed }
  ]

  return (
    <div className="flex flex-col gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 sm:p-3">
      <div className="flex gap-2 justify-center flex-wrap sm:gap-1.5">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={`px-4 py-2 border border-gray-300 dark:border-gray-500 rounded-md cursor-pointer transition-all duration-200 text-sm flex items-center gap-1 sm:px-3 sm:py-1.5 sm:text-xs ${
              currentFilter === filter.key 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary'
            }`}
            onClick={() => onFilterChange(filter.key)}
          >
            {filter.label}
            <span className="text-xs opacity-80">({filter.count})</span>
          </button>
        ))}
      </div>
      
      <div className="text-center pt-2 border-t border-gray-200 dark:border-gray-600">
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          {stats.active} of {stats.total} remaining
        </span>
      </div>
    </div>
  )
}

export default TodoFilter
