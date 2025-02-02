# TaskMaster - Modern Task Management App 🚀

## Project Story 📚

This project was fully designed and implemented through collaboration with Cody (AI Assistant from Sourcegraph), featuring complete component architecture, state management, and modern UI design.

![TaskMaster Preview](https://s6.uupload.ir/files/capture_5bui.png)

## Core Features 🌟
- Complete CRUD operations for tasks
- Priority management (High/Medium/Low)
- Advanced filtering system
- Real-time search functionality
- Task statistics and analytics
- Modern glass-morphism UI

## Technical Implementation 💻
### State Management
- Custom TaskContext using React Context API
- Local Storage integration for persistence
- Efficient state updates and filtering logic

### Components Structure
- TaskForm: Task creation with priority selection
- TaskList: Dynamic task display with inline editing
- FilterBar: Multi-level filtering system
- SearchBar: Real-time search functionality
- Stats: Visual statistics dashboard

### Styling
- TailwindCSS for modern UI
- Glass-morphism design elements
- Responsive layout across all devices
- Smooth animations and transitions

## Getting Started 🚀
```bash
# Clone repository
git clone https://github.com/yourusername/taskmaster.git

# Install dependencies
cd taskmaster
npm install

# Start development server
npm run dev
```
## Tech Stack 🛠️
- React 18
  - Latest React features and hooks
  - Efficient component rendering
  - Modern React patterns

- Vite
  - Lightning-fast development server
  - Optimized build process
  - Hot Module Replacement (HMR)

- TailwindCSS
  - Utility-first CSS framework
  - Custom design system
  - Responsive design utilities
  - Glass-morphism components

- Context API
  - Centralized state management
  - Efficient data flow
  - Clean component communication
  - Reduced prop drilling

- Local Storage
  - Persistent data storage
  - Automatic state saving
  - Browser-based caching
  - Offline capabilities

## Project Structure 📦
```bash
src/
├── components/
│   ├── FilterBar/
│   ├── SearchBar/
│   ├── Stats/
│   ├── TaskForm/
│   └── TaskList/
├── context/
│   └── TaskContext.jsx
├── constants/
│   └── filters.js
├── hooks/
│   └── useLocalStorage.js
├── utils/
│   └── timeAgo.js
└── App.jsx
```

## Core Features 🌟

### Task Management
- Create new tasks with priority levels
- Edit existing tasks
- Delete tasks
- Toggle task completion status
- Priority management (high/medium/low)

### Advanced Filtering System
- Filter by status (All/Active/Completed)
- Time-based filtering (Today/Week/Month)
- Priority-based sorting
- Newest/Oldest sorting
- Real-time search functionality

### State Management
- Centralized context using React Context API
- Local storage persistence
- Efficient state updates
- Complex filtering and sorting logic

### Data Organization
- Task structure with:
  - Text content
  - Completion status
  - Creation timestamp
  - Priority level
  - Unique identification

### Search & Sort
- Text-based search across tasks
- Multiple sorting options:
  - Priority-based
  - Creation date (newest/oldest)
  - Status-based grouping

## Contributing
Feel free to contribute to this project:
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## License
MIT License

---
Built with 💜 by Pouya🦊 & Cody🤖
