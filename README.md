# React Todo App 📝

A modern, responsive todo list application built with React and Vite. Features a clean interface, local storage persistence, and full CRUD functionality.

## ✨ Features

- ➕ **Add todos** - Create new tasks with a simple form
- ✅ **Toggle completion** - Mark tasks as complete/incomplete
- ✏️ **Edit todos** - Double-click or use edit button to modify tasks
- 🗑️ **Delete todos** - Remove tasks you no longer need
- 🔍 **Filter todos** - View all, active, or completed tasks
- 💾 **Local storage** - Your todos persist between browser sessions
- 📱 **Responsive design** - Works great on desktop and mobile
- 🌙 **Dark mode support** - Automatically adapts to system theme

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── TodoForm.jsx    # Form for adding new todos
│   ├── TodoList.jsx    # List container component
│   ├── TodoItem.jsx    # Individual todo item
│   └── TodoFilter.jsx  # Filter buttons and stats
├── hooks/              # Custom React hooks
│   └── useTodos.js     # Main todo management logic
├── utils/              # Utility functions
│   ├── storage.js      # Local storage helpers
│   └── todoUtils.js    # Todo-related utilities
├── App.jsx             # Main application component
├── App.css             # Global styles
├── main.jsx            # Application entry point
└── index.css           # Base styles
```

## 🎯 Usage

### Adding Todos
- Type your task in the input field
- Press Enter or click the "Add" button
- The todo will appear at the top of the list

### Managing Todos
- **Complete**: Click the circle button (⭕) to mark as done (✅)
- **Edit**: Double-click the todo text or click the edit button (✏️)
- **Delete**: Click the trash button (🗑️) to remove

### Filtering
- **All**: Show all todos
- **Active**: Show only incomplete todos
- **Completed**: Show only completed todos

### Keyboard Shortcuts
- **Enter**: Save when editing, submit when adding
- **Escape**: Cancel editing or clear input

## 🎨 Styling

The app uses modern CSS with:
- CSS custom properties for theming
- Flexbox for layouts
- Smooth transitions and hover effects
- Responsive design with mobile-first approach
- Dark mode support via `prefers-color-scheme`

## 💾 Data Persistence

Todos are automatically saved to browser's local storage:
- Data persists between browser sessions
- No server required
- Graceful error handling for storage issues

## 🔧 Built With

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **Local Storage API** - Data persistence

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern React patterns and hooks
- Inspired by TodoMVC project
- Icons from Unicode emoji set

